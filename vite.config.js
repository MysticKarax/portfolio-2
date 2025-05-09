import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { glob } from 'glob'
import path from 'node:path'
import fs from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'i18n-resources',
      // Store locale data
      localeCache: new Map(),
      localeFiles: [],
      enforce: 'pre',
      
      // This ensures Vite knows about all locale files, including for dynamic imports
      configResolved(config) {
        // Pre-scan all locale files to ensure they're included in the build
        const localeFiles = glob.sync('src/i18n/locales/*.json', { cwd: process.cwd() })
        console.log('Locale files that will be included:', localeFiles)
        
        // Store the list of locale files for later use
        this.localeFiles = localeFiles.map(file => {
          const absolutePath = path.resolve(process.cwd(), file)
          return { 
            path: absolutePath,
            id: absolutePath,
            virtualId: `virtual:i18n-locale:${path.basename(file, '.json')}`,
            locale: path.basename(file, '.json')
          }
        })
        
        // Pre-load all locale files content
        this.localeFiles.forEach(file => {
          try {
            const content = fs.readFileSync(file.path, 'utf-8')
            const data = JSON.parse(content)
            this.localeCache.set(file.id, data)
            this.localeCache.set(file.virtualId, data)
            console.log(`Pre-loaded locale: ${file.locale}`)
          } catch (error) {
            console.error(`Failed to pre-load locale ${file.locale}:`, error)
          }
        })
      },
      
      // Tell Vite to include these files in the bundle and handle virtual imports
      resolveId(id, importer) {
        // Handle special virtual module requests
        if (id.startsWith('virtual:i18n-locale:')) {
          const locale = id.replace('virtual:i18n-locale:', '')
          const localePath = path.resolve(process.cwd(), `src/i18n/locales/${locale}.json`)
          console.log(`Resolved virtual locale: ${id} -> ${localePath}`)
          return { id: localePath, moduleSideEffects: false }
        }
        
        // Handle dynamic imports using relative paths from i18n loader
        if (importer?.includes('src/i18n') && id.endsWith('.json')) {
          const localePath = path.resolve(path.dirname(importer), id)
          console.log(`Resolved dynamic import: ${id} from ${importer} -> ${localePath}`)
          return { id: localePath, moduleSideEffects: false }
        }
        
        // Handle direct imports of locale files
        if (id.includes('/src/i18n/locales/') && id.endsWith('.json')) {
          console.log(`Resolved direct locale import: ${id}`)
          return { id, moduleSideEffects: false }
        }
        
        return null
      },
      
      // Process i18n files and ensure JSON is properly transformed
      transform(code, id) {
        // Process the i18n loader file
        if (id.includes('src/i18n/index.js')) {
          console.log('Processing i18n entry file for dynamic imports')
          
          // We don't modify the code but ensure it's properly processed
          // by returning it explicitly
          return {
            code,
            map: null
          }
        }
        
        // Process locale JSON files
        if (id.includes('/src/i18n/locales/') && id.endsWith('.json')) {
          const locale = path.basename(id, '.json')
          console.log(`Processing locale file: ${locale}`)
          
          try {
            // Get cached content or load it
            let content
            if (this.localeCache.has(id)) {
              content = this.localeCache.get(id)
            } else {
              const fileContent = fs.readFileSync(id, 'utf-8')
              content = JSON.parse(fileContent)
              this.localeCache.set(id, content)
            }
            
            // Return the properly formatted JS module
            const jsonString = JSON.stringify(content)
            return {
              code: `export default ${jsonString}`,
              map: null
            }
          } catch (error) {
            console.error(`Error processing locale file ${id}:`, error)
            // Let Vite handle it if there's an error
            return null
          }
        }
        
        return null
      },
      
      // Make sure all locale files are included in the build
      load(id) {
        if (id.includes('/src/i18n/locales/') && id.endsWith('.json')) {
          const locale = path.basename(id, '.json')
          console.log(`Loading locale file: ${locale}`)
          
          try {
            // Get cached content or load it
            if (this.localeCache.has(id)) {
              const content = this.localeCache.get(id)
              const jsonString = JSON.stringify(content)
              return `export default ${jsonString}`
            }
          } catch (error) {
            console.error(`Error loading locale file ${id}:`, error)
          }
          
          // Let Vite handle it if not in cache
          return null
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Ensure dynamic imports are properly processed
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
      // This ensures that imported JSON files are properly included in the build
      output: {
        manualChunks(id) {
          // Create separate chunks for each locale to optimize loading
          if (id.includes('/src/i18n/locales/')) {
            const locale = path.basename(id, '.json')
            console.log(`Creating chunk for locale: ${locale}`)
            return `locale-${locale}`
          }
          
          // Group i18n code into a single chunk
          if (id.includes('/src/i18n/') && !id.endsWith('.json')) {
            return 'i18n-core'
          }
        }
      }
    },
    // Enable chunking of dynamic imports
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000
  },
  // Explicitly configure JSON import support
  json: {
    stringify: false, // Must be false to get actual parsed JSON objects, not strings
  },
  // Enable more verbose build logs to debug i18n issues
  logLevel: 'info'
})

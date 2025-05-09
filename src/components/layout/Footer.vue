<template>
  <div class="footer-container">
    <!-- Footer content with grid layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-4">
      <!-- Logo and About column -->
      <div class="flex flex-col">
        <div class="flex items-center mb-4">
          <img
            src="/JordiLogo.jpg"
            alt="Jordi Logo"
            class="h-10 w-auto rounded-full mr-3"
          />
          <span class="text-xl font-semibold text-text-primary">Jordi</span>
        </div>
        <p class="text-accent-tertiary mb-6">
          {{ $t('sections.hero.description') }}
        </p>
        <!-- Social Media Icons -->
        <div class="flex space-x-4 mt-2">
          <a
            href="#"
            class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <!-- LinkedIn Icon -->
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <!-- GitHub Icon -->
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200"
            aria-label="Twitter"
          >
            <!-- Twitter/X Icon -->
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links column -->
      <div class="flex flex-col">
        <h3 class="text-text-primary font-semibold text-lg mb-4">{{ $t('footer.quick_links') }}</h3>
        <nav class="flex flex-col space-y-2">
          <a 
            v-for="navItem in navItems" 
            :key="navItem.path"
            :href="navItem.path" 
            class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200"
          >
            {{ $t(`header.nav.${navItem.key}`) }}
          </a>
          <a href="#projects" class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200">
            {{ $t('sections.projects.title') }}
          </a>
          <a href="#case-studies" class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200">
            {{ $t('sections.case_studies.title') }}
          </a>
        </nav>
      </div>

      <!-- Contact column -->
      <div class="flex flex-col">
        <h3 class="text-text-primary font-semibold text-lg mb-4">{{ $t('footer.contact') }}</h3>
        <a 
          href="mailto:contact@jordi.design" 
          class="text-accent-primary hover:text-accent-secondary transition-colors duration-200 mb-2 inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          contact@jordi.design
        </a>
        <div class="flex items-center text-accent-tertiary mt-2">
          <span class="h-2.5 w-2.5 rounded-full bg-available mr-2"></span>
          <span>{{ $t('header.availability') }}</span>
        </div>
      </div>
    </div>

    <!-- Copyright bar -->
    <div class="border-t border-accent-tertiary/20 mt-8 pt-8 pb-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-accent-tertiary text-sm mb-4 md:mb-0">
          &copy; {{ currentYear }} Jordi. {{ $t('footer.rights') }}
        </p>
        <div class="flex space-x-4 text-sm">
          <a href="#" class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200">
            {{ $t('footer.privacy') }}
          </a>
          <a href="#" class="text-accent-tertiary hover:text-accent-primary transition-colors duration-200">
            {{ $t('footer.terms') }}
          </a>
        </div>
      </div>
    </div>
    
    <!-- Back to top button -->
    <div class="flex justify-center mt-4">
      <a 
        href="#home" 
        class="inline-flex items-center gap-2 text-accent-tertiary hover:text-accent-primary transition-all duration-300 transform hover:-translate-y-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        <span class="text-sm">Back to Top</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Initialize i18n
const { t } = useI18n()

// Current year for copyright
const currentYear = computed(() => new Date().getFullYear())

// Nav items (matching header)
const navItems = [
  { key: 'home', path: '#home' },
  { key: 'experience', path: '#experience' },
  { key: 'about', path: '#about' },
  { key: 'contact', path: '#contact' }
]
</script>

<style scoped>
/* Optional additional styling */
</style>

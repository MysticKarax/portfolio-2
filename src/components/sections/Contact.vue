<template>
  <section id="contact" class="py-20 md:py-28 bg-accent-primary/10 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-primary blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-secondary blur-3xl"></div>
    </div>
    
    <!-- Decorative elements -->
    <div class="absolute top-12 left-16 w-20 h-20 border-2 border-accent-primary/30 rounded-full hidden lg:block"></div>
    <div class="absolute bottom-16 right-24 w-16 h-16 border-2 border-accent-primary/30 rounded-lg rotate-45 hidden lg:block"></div>
    <div class="absolute top-28 right-[10%] w-6 h-6 bg-accent-primary/30 rounded-full hidden lg:block"></div>
    <div class="absolute bottom-28 left-[10%] w-8 h-8 bg-accent-primary/30 rounded-lg rotate-12 hidden lg:block"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl mx-auto text-center"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <!-- Availability status -->
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-background/20 dark:bg-background/40 backdrop-blur-sm mb-6">
          <span class="h-2.5 w-2.5 rounded-full bg-available mr-2"></span>
          <span class="text-text-primary text-sm font-medium">{{ $t('header.availability') }}</span>
        </div>
        
        <!-- Section headline -->
        <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          {{ $t('sections.contact.title') }}
        </h2>
        <p class="text-xl text-text-secondary mb-10 max-w-xl mx-auto">
          {{ $t('sections.contact.subtitle') }}
        </p>
        
        <!-- CTA button -->
        <div class="mb-12">
          <a 
            href="mailto:contact@example.com" 
            class="inline-flex items-center gap-3 px-8 py-4 bg-accent-primary hover:bg-accent-secondary text-white rounded-full transition-all duration-300 shadow-lg shadow-accent-primary/25 hover:shadow-accent-secondary/30 text-lg font-medium transform hover:-translate-y-1"
          >
            <span>{{ $t('sections.contact.email') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
        
        <!-- Social media links -->
        <div class="flex justify-center gap-6 mb-8">
          <!-- LinkedIn -->
          <a 
            href="#" 
            class="w-12 h-12 rounded-full flex items-center justify-center bg-background/20 dark:bg-background/40 backdrop-blur-sm text-text-primary hover:text-accent-primary hover:bg-background/40 dark:hover:bg-background/60 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          
          <!-- GitHub -->
          <a 
            href="#" 
            class="w-12 h-12 rounded-full flex items-center justify-center bg-background/20 dark:bg-background/40 backdrop-blur-sm text-text-primary hover:text-accent-primary hover:bg-background/40 dark:hover:bg-background/60 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="GitHub"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          
          <!-- Twitter -->
          <a 
            href="#" 
            class="w-12 h-12 rounded-full flex items-center justify-center bg-background/20 dark:bg-background/40 backdrop-blur-sm text-text-primary hover:text-accent-primary hover:bg-background/40 dark:hover:bg-background/60 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Twitter"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          
          <!-- Instagram -->
          <a 
            href="#" 
            class="w-12 h-12 rounded-full flex items-center justify-center bg-background/20 dark:bg-background/40 backdrop-blur-sm text-text-primary hover:text-accent-primary hover:bg-background/40 dark:hover:bg-background/60 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Instagram"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
        
        <!-- Alternative contact info -->
        <p class="text-text-secondary text-sm">
          Or schedule a call with me at your convenience
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

// Initialize i18n
const { t } = useI18n()

// Animation directive (same as other components)
const vMotion = {
  mounted(el, binding) {
    // Check if binding.value exists before proceeding
    if (!binding || !binding.value) return;
    
    // Add initial state
    if (binding.value.initial) {
      Object.entries(binding.value.initial).forEach(([key, value]) => {
        if (key === 'opacity') {
          el.style.opacity = value;
        } else if (key === 'y') {
          el.style.transform = `translateY(${value}px)`;
        }
      });
    }
    
    // Add enter animation after a short delay
    setTimeout(() => {
      const duration = binding.value.enter?.transition?.duration || 500;
      el.style.transition = `all ${duration}ms ease`;
      
      if (binding.value.enter) {
        Object.entries(binding.value.enter).forEach(([key, value]) => {
          if (key === 'opacity') {
            el.style.opacity = value;
          } else if (key === 'y') {
            el.style.transform = `translateY(${value}px)`;
          }
        });
      }
    }, binding.value.enter?.transition?.delay || 0);
  }
}
</script>

<style scoped>
/* Optional additional styling */
</style>


<template>
  <section id="home" class="relative py-20 md:py-32 overflow-hidden">
    <!-- Background design elements -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <!-- Gradient circles -->
      <div class="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-accent-primary/10 filter blur-3xl opacity-70 dark:opacity-40 animate-float-slow"></div>
      <div class="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-accent-secondary/10 filter blur-3xl opacity-70 dark:opacity-40 animate-float"></div>
      
      <!-- Grid pattern (visible in dark mode) -->
      <div class="absolute inset-0 bg-grid-pattern opacity-0 dark:opacity-5"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        <div class="max-w-4xl lg:flex-1 order-2 lg:order-1">
        <!-- Name with animation -->
        <h1 
          class="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 animate-fade-in"
          :style="{ animationDelay: '0.2s' }"
        >
          <span class="inline-block">{{ $t('sections.hero.title') }}</span>
        </h1>

        <!-- Title with animation -->
        <h2 
          class="text-2xl md:text-3xl lg:text-4xl font-medium text-accent-primary mb-6 animate-fade-in"
          :style="{ animationDelay: '0.4s' }"
        >
          <span class="inline-block">{{ $t('sections.hero.subtitle') }}</span>
        </h2>

        <!-- Description with animation -->
        <p 
          class="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl animate-fade-in"
          :style="{ animationDelay: '0.6s' }"
        >
          {{ $t('sections.hero.description') }}
        </p>

        <!-- CTA Buttons with animation -->
        <div 
          class="flex flex-wrap gap-4 animate-fade-in"
          :style="{ animationDelay: '0.8s' }"
        >
          <a 
            href="#projects" 
            class="px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-white rounded-full transition-colors duration-300 font-medium inline-flex items-center group"
          >
            {{ $t('sections.projects.title') }}
            <ArrowRightIcon class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a 
            href="#about" 
            class="px-6 py-3 bg-transparent border border-accent-tertiary hover:border-accent-primary text-text-primary hover:text-accent-primary rounded-full transition-all duration-300 font-medium"
          >
            {{ $t('sections.about.title') }}
          </a>
        </div>

        <!-- Stats with animation (Optional) -->
        <div 
          class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-accent-tertiary/20 animate-fade-in"
          :style="{ animationDelay: '1s' }"
        >
          <div class="text-center md:text-left">
            <p class="text-3xl md:text-4xl font-bold text-accent-primary">5+</p>
            <p class="text-accent-tertiary mt-1">{{ $t('sections.career.experience') }}</p>
          </div>
          <div class="text-center">
            <p class="text-3xl md:text-4xl font-bold text-accent-primary">40+</p>
            <p class="text-accent-tertiary mt-1">{{ $t('sections.career.clients') }}</p>
          </div>
          <div class="text-center md:text-right">
            <p class="text-3xl md:text-4xl font-bold text-accent-primary">100+</p>
            <p class="text-accent-tertiary mt-1">{{ $t('sections.career.projects') }}</p>
          </div>
        </div>
        </div>
        
        <!-- Profile image (order-1 on mobile, order-2 on desktop) -->
        <div class="lg:flex-shrink-0 order-1 lg:order-2 animate-fade-in" :style="{ animationDelay: '0.3s' }">
          <div class="relative">
            <div class="absolute inset-0 bg-accent-primary/20 rounded-3xl blur-xl transform -rotate-6 scale-95"></div>
            <img 
              src="/designer-profile.jpg" 
              alt="Product Designer Portrait"
              class="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-2xl border-4 border-background relative z-10 shadow-xl"
              onerror="this.src='/JordiLogo.jpg'; this.classList.add('p-4', 'bg-background-alt');"
            />
            <div class="absolute -bottom-3 -right-3 bg-background p-4 rounded-full shadow-lg z-20">
              <div class="text-accent-primary">
                <SparklesIcon class="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <button 
          @click="scrollToNextSection"
          class="flex flex-col items-center text-accent-tertiary hover:text-accent-primary transition-colors duration-300 focus:outline-none"
          aria-label="Scroll to next section"
        >
          <span class="text-xs mb-2">{{ $t('common.scrollDown') }}</span>
          <ChevronDownIcon class="h-6 w-6" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ArrowRightIcon, ChevronDownIcon, SparklesIcon } from '@heroicons/vue/24/outline'

// Initialize i18n
const { t } = useI18n()

// Method to scroll to the next section
const scrollToNextSection = () => {
  const nextSection = document.querySelector('#home + section')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-15px) scale(1.05);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}
</style>


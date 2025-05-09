<template>
  <section id="skillset" class="py-20 bg-background-alt/30 dark:bg-background/50">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll" 
            data-animation="fade-up">
          {{ $t('sections.skillset.title') }}
        </h2>
        <div class="w-24 h-1 bg-accent-primary mx-auto rounded-full mb-6 animate-on-scroll"
             data-animation="scale-x" 
             data-delay="200"></div>
        <p class="text-lg text-accent-tertiary animate-on-scroll" 
           data-animation="fade-up" 
           data-delay="300">
          {{ $t('sections.skillset.description') }}
        </p>
      </div>

      <!-- Skills grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Graphic Design skill card -->
        <div 
          class="skill-card group bg-background dark:bg-background-alt border border-accent-tertiary/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50 animate-on-scroll"
          data-animation="fade-up"
          data-delay="100"
        >
          <!-- Icon -->
          <div class="skill-icon-wrapper mb-6">
            <div class="h-16 w-16 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
              <!-- Graphic Design Icon -->
              <PhotoIcon class="h-8 w-8" />
            </div>
          </div>

          <!-- Skill title -->
          <h3 class="text-xl md:text-2xl font-semibold mb-4 text-text-primary group-hover:text-accent-primary transition-colors duration-300">
            {{ $t('sections.skillset.graphic_design') }}
          </h3>

          <!-- Skill description -->
          <p class="text-accent-tertiary group-hover:text-text-secondary transition-colors duration-300">
            {{ $t('sections.skillset.skill_descriptions.graphic_design') }}
          </p>
          
          <!-- Skill level indicator -->
          <div class="mt-4">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs text-accent-tertiary">Skill Level</span>
              <span class="text-xs text-accent-primary font-semibold">Advanced</span>
            </div>
            <div class="w-full bg-accent-tertiary/20 h-2 rounded-full overflow-hidden">
              <div class="bg-accent-primary h-full rounded-full" style="width: 90%"></div>
            </div>
          </div>

          <!-- Skill details - Hidden and shown on hover -->
          <div class="skill-details mt-6 pt-6 border-t border-accent-tertiary/20 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500">
            <ul class="space-y-2">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Brand Identity</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Visual Communication</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Digital Illustration</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Interface Design skill card -->
        <div 
          class="skill-card group bg-background dark:bg-background-alt border border-accent-tertiary/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50 animate-on-scroll"
          data-animation="fade-up"
          data-delay="300"
        >
          <!-- Icon -->
          <div class="skill-icon-wrapper mb-6">
            <div class="h-16 w-16 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
              <!-- Interface Design Icon -->
              <DeviceTabletIcon class="h-8 w-8" />
            </div>
          </div>

          <!-- Skill title -->
          <h3 class="text-xl md:text-2xl font-semibold mb-4 text-text-primary group-hover:text-accent-primary transition-colors duration-300">
            {{ $t('sections.skillset.interface_design') }}
          </h3>

          <!-- Skill description -->
          <p class="text-accent-tertiary group-hover:text-text-secondary transition-colors duration-300">
            {{ $t('sections.skillset.skill_descriptions.interface_design') }}
          </p>
          
          <!-- Skill level indicator -->
          <div class="mt-4">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs text-accent-tertiary">Skill Level</span>
              <span class="text-xs text-accent-primary font-semibold">Expert</span>
            </div>
            <div class="w-full bg-accent-tertiary/20 h-2 rounded-full overflow-hidden">
              <div class="bg-accent-primary h-full rounded-full" style="width: 95%"></div>
            </div>
          </div>

          <!-- Skill details - Hidden and shown on hover -->
          <div class="skill-details mt-6 pt-6 border-t border-accent-tertiary/20 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500">
            <ul class="space-y-2">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Responsive Web Design</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Mobile App Interface</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Design Systems</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- User Experience skill card -->
        <div 
          class="skill-card group bg-background dark:bg-background-alt border border-accent-tertiary/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:border-accent-primary/50 animate-on-scroll"
          data-animation="fade-up"
          data-delay="500"
        >
          <!-- Icon -->
          <div class="skill-icon-wrapper mb-6">
            <div class="h-16 w-16 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
              <!-- User Experience Icon -->
              <UserGroupIcon class="h-8 w-8" />
            </div>
          </div>

          <!-- Skill title -->
          <h3 class="text-xl md:text-2xl font-semibold mb-4 text-text-primary group-hover:text-accent-primary transition-colors duration-300">
            {{ $t('sections.skillset.user_experience') }}
          </h3>

          <!-- Skill description -->
          <p class="text-accent-tertiary group-hover:text-text-secondary transition-colors duration-300">
            {{ $t('sections.skillset.skill_descriptions.user_experience') }}
          </p>
          
          <!-- Skill level indicator -->
          <div class="mt-4">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs text-accent-tertiary">Skill Level</span>
              <span class="text-xs text-accent-primary font-semibold">Advanced</span>
            </div>
            <div class="w-full bg-accent-tertiary/20 h-2 rounded-full overflow-hidden">
              <div class="bg-accent-primary h-full rounded-full" style="width: 85%"></div>
            </div>
          </div>

          <!-- Skill details - Hidden and shown on hover -->
          <div class="skill-details mt-6 pt-6 border-t border-accent-tertiary/20 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500">
            <ul class="space-y-2">
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>User Research</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Usability Testing</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5" />
                <span>Information Architecture</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'
import { CheckIcon, PhotoIcon, DeviceTabletIcon, UserGroupIcon } from '@heroicons/vue/24/outline'

// Initialize i18n
const { t } = useI18n()

// Animation on scroll functionality
onMounted(() => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const animation = el.dataset.animation || 'fade-up'
        const delay = el.dataset.delay || 0
        
        setTimeout(() => {
          el.classList.add(`animate-${animation}`)
          el.style.opacity = 1
        }, delay)
        
        // Unobserve after animation
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.1 })
  
  animatedElements.forEach(el => {
    el.style.opacity = 0
    observer.observe(el)
  })
})
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
}

.animate-fade-up {
  animation: fadeUp 0.7s ease-out forwards;
}

.animate-scale-x {
  animation: scaleX 0.7s ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleX {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}
</style>


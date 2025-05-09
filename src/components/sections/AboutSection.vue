<template>
  <section id="about" class="py-20 bg-background-alt/30 dark:bg-background/50">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll" 
            data-animation="fade-up">
          {{ $t('sections.about.title') }}
        </h2>
        <div class="w-24 h-1 bg-accent-primary mx-auto rounded-full mb-6 animate-on-scroll"
             data-animation="scale-x" 
             data-delay="200"></div>
      </div>

      <!-- Main content - responsive grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left side: Personal image with animated frame -->
        <div class="order-2 lg:order-1 animate-on-scroll" data-animation="fade-right">
          <div class="relative">
            <!-- Decorative elements -->
            <div class="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-accent-primary/20 animate-float"></div>
            <div class="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-accent-secondary/20 animate-float animation-delay-1000"></div>
            
            <!-- Image frame with subtle border -->
            <div class="relative rounded-xl overflow-hidden border-2 border-accent-tertiary/20 shadow-xl">
              <!-- Using a placeholder image, will need to be replaced with actual avatar -->
              <img 
                src="https://via.placeholder.com/600x600/121212/A450E1?text=Jordi" 
                alt="Jordi - Product Designer" 
                class="w-full h-auto object-cover aspect-square"
              />
              <!-- Subtle gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>

        <!-- Right side: Bio content -->
        <div class="order-1 lg:order-2 animate-on-scroll" data-animation="fade-left">
          <h3 class="text-2xl md:text-3xl font-bold text-accent-primary mb-6">
            {{ $t('sections.about.subtitle') }}
          </h3>

          <div class="space-y-6">
            <!-- Main description -->
            <p class="text-lg text-text-secondary">
              {{ $t('sections.about.description') }}
            </p>
            
            <p class="text-text-secondary">
              With over 5 years of experience in product design, I've developed a methodology that combines aesthetics with functionality to create meaningful and impactful user experiences. My passion lies in solving complex problems through design thinking and user-centered approaches.
            </p>

            <!-- Key qualities/values -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-text-primary">Creative Thinking</h4>
                  <p class="text-accent-tertiary">Bringing innovative solutions to complex design challenges</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-text-primary">User-Centered</h4>
                  <p class="text-accent-tertiary">Always designing with the end user's needs in mind</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-text-primary">Detail-Oriented</h4>
                  <p class="text-accent-tertiary">Meticulous attention to the small details that make great designs</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-text-primary">Results-Driven</h4>
                  <p class="text-accent-tertiary">Focused on creating measurable improvements through design</p>
                </div>
              </div>
            </div>

            <!-- Expertise badges -->
            <div class="mt-8">
              <h4 class="font-semibold text-text-primary mb-4">Areas of Expertise</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm">UX Design</span>
                <span class="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm">UI Design</span>
                <span class="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm">Design Systems</span>
                <span class="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm">User Research</span>
                <span class="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm">Prototyping</span>
                <span class="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm">Interaction Design</span>
                <span class="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm">Visual Design</span>
                <span class="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm">Wireframing</span>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="mt-8">
              <a 
                href="#contact" 
                class="inline-flex items-center px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-white rounded-full transition-colors duration-300 font-medium"
              >
                {{ $t('sections.contact.cta') }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

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
/* Animation classes */
.animate-on-scroll {
  opacity: 0;
}

.animate-fade-up {
  animation: fadeUp 0.7s ease-out forwards;
}

.animate-fade-left {
  animation: fadeLeft 0.7s ease-out forwards;
}

.animate-fade-right {
  animation: fadeRight 0.7s ease-out forwards;
}

.animate-scale-x {
  animation: scaleX 0.7s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

/* Keyframe animations */
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

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>


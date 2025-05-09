<template>
  <section id="process" class="py-20">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll" 
            data-animation="fade-up">
          Process
        </h2>
        <div class="w-24 h-1 bg-accent-primary mx-auto rounded-full mb-6 animate-on-scroll"
             data-animation="scale-x" 
             data-delay="200"></div>
        <p class="text-lg text-accent-tertiary animate-on-scroll" 
           data-animation="fade-up" 
           data-delay="300">
          My methodical approach ensures every project meets and exceeds expectations
        </p>
      </div>

      <!-- Process timeline for desktop -->
      <div class="hidden md:block relative">
        <!-- Timeline line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent-tertiary/30 z-0"></div>
        
        <!-- Process steps -->
        <div class="relative z-10">
          <!-- Step 1: Pre-Process -->
          <div class="process-step flex items-center mb-12 md:mb-24 animate-on-scroll" data-animation="fade-up">
            <div class="w-1/2 pr-12 text-right">
              <h3 class="text-xl lg:text-2xl font-semibold mb-3 text-text-primary">
                Pre-Process
              </h3>
              <p class="text-accent-tertiary">Understanding client needs and market research to establish project goals and requirements.</p>
            </div>
            <div class="process-point-wrapper">
              <div class="h-12 w-12 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg scale-step">
                <span class="text-lg font-bold">1</span>
              </div>
            </div>
            <div class="w-1/2 pl-12">
              <!-- Icon for step 1 -->
              <div class="p-4 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block">
                <LightBulbIcon class="h-8 w-8 text-accent-primary" />
              </div>
            </div>
          </div>

          <!-- Step 2: Low Fidelity -->
          <div class="process-step flex items-center mb-12 md:mb-24 animate-on-scroll" data-animation="fade-up" data-delay="200">
            <div class="w-1/2 pr-12 text-right">
              <!-- Icon for step 2 -->
              <div class="p-4 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block ml-auto">
                <PencilSquareIcon class="h-8 w-8 text-accent-primary" />
              </div>
            </div>
            <div class="process-point-wrapper">
              <div class="h-12 w-12 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg scale-step">
                <span class="text-lg font-bold">2</span>
              </div>
            </div>
            <div class="w-1/2 pl-12">
              <h3 class="text-xl lg:text-2xl font-semibold mb-3 text-text-primary">
                Low Fidelity
              </h3>
              <p class="text-accent-tertiary">Creating initial sketches, wireframes, and basic prototypes to establish the foundation of the design.</p>
            </div>
          </div>

          <!-- Step 3: Work/Design -->
          <div class="process-step flex items-center mb-12 md:mb-24 animate-on-scroll" data-animation="fade-up" data-delay="300">
            <div class="w-1/2 pr-12 text-right">
              <h3 class="text-xl lg:text-2xl font-semibold mb-3 text-text-primary">
                Work/Design
              </h3>
              <p class="text-accent-tertiary">Developing high-fidelity designs that incorporate visual elements, branding, and user experience principles.</p>
            </div>
            <div class="process-point-wrapper">
              <div class="h-12 w-12 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg scale-step">
                <span class="text-lg font-bold">3</span>
              </div>
            </div>
            <div class="w-1/2 pl-12">
              <!-- Icon for step 3 -->
              <div class="p-4 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block">
                <PaintBrushIcon class="h-8 w-8 text-accent-primary" />
              </div>
            </div>
          </div>

          <!-- Step 4: Assets & Delivery -->
          <div class="process-step flex items-center mb-12 md:mb-24 animate-on-scroll" data-animation="fade-up" data-delay="400">
            <div class="w-1/2 pr-12 text-right">
              <!-- Icon for step 4 -->
              <div class="p-4 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block ml-auto">
                <ArchiveBoxIcon class="h-8 w-8 text-accent-primary" />
              </div>
            </div>
            <div class="process-point-wrapper">
              <div class="h-12 w-12 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg scale-step">
                <span class="text-lg font-bold">4</span>
              </div>
            </div>
            <div class="w-1/2 pl-12">
              <h3 class="text-xl lg:text-2xl font-semibold mb-3 text-text-primary">
                Assets & Delivery
              </h3>
              <p class="text-accent-tertiary">Preparing and organizing design assets for development, ensuring they meet technical specifications.</p>
            </div>
          </div>

          <!-- Step 5: Final & Test -->
          <div class="process-step flex items-center mb-12 md:mb-24 animate-on-scroll" data-animation="fade-up" data-delay="500">
            <div class="w-1/2 pr-12 text-right">
              <h3 class="text-xl lg:text-2xl font-semibold mb-3 text-text-primary">
                Final & Test
              </h3>
              <p class="text-accent-tertiary">Quality assurance, testing, and final refinements to ensure the design meets all requirements.</p>
            </div>
            <div class="process-point-wrapper">
              <div class="h-12 w-12 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg scale-step">
                <span class="text-lg font-bold">5</span>
              </div>
            </div>
            <div class="w-1/2 pl-12">
              <!-- Icon for step 5 -->
              <div class="p-4 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block">
                <CheckCircleIcon class="h-8 w-8 text-accent-primary" />
              </div>
            </div>
          </div>

          <!-- Step 6: After Design -->
          <div class="process-step flex items-center animate-on-scroll" data-animation="fade-up" data-delay="600">
            <div class="w-1/2 pr-12 text-right">
              <!-- Icon for step 6 -->
              <div class="p-4 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block ml-auto">
                <BoltIcon class="h-8 w-8 text-accent-primary" />
              </div>
            </div>
            <div class="process-point-wrapper">
              <div class="h-12 w-12 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg scale-step">
                <span class="text-lg font-bold">6</span>
              </div>
            </div>
            <div class="w-1/2 pl-12">
              <h3 class="text-xl lg:text-2xl font-semibold mb-3 text-text-primary">
                After Design
              </h3>
              <p class="text-accent-tertiary">Follow-up support, documentation, and continuous improvement based on feedback and analytics.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Process steps for mobile -->
      <div class="md:hidden space-y-12">
        <!-- Step 1: Pre-Process -->
        <div class="process-step-mobile animate-on-scroll" data-animation="fade-up">
          <div class="flex items-center mb-4">
            <div class="h-10 w-10 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg mr-4">
              <span class="text-base font-bold">1</span>
            </div>
            <h3 class="text-xl font-semibold text-text-primary">
              Pre-Process
            </h3>
          </div>
          <div class="pl-14">
            <p class="text-accent-tertiary mb-4">Understanding client needs and market research to establish project goals and requirements.</p>
            <div class="p-3 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block">
              <LightBulbIcon class="h-6 w-6 text-accent-primary" />
            </div>
          </div>
        </div>

        <!-- Step 2: Low Fidelity -->
        <div class="process-step-mobile animate-on-scroll" data-animation="fade-up" data-delay="100">
          <div class="flex items-center mb-4">
            <div class="h-10 w-10 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg mr-4">
              <span class="text-base font-bold">2</span>
            </div>
            <h3 class="text-xl font-semibold text-text-primary">
              Low Fidelity
            </h3>
          </div>
          <div class="pl-14">
            <p class="text-accent-tertiary mb-4">Creating initial sketches, wireframes, and basic prototypes to establish the foundation of the design.</p>
            <div class="p-3 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block">
              <PencilSquareIcon class="h-6 w-6 text-accent-primary" />
            </div>
          </div>
        </div>
        
        <!-- Step 3: Work/Design -->
        <div class="process-step-mobile animate-on-scroll" data-animation="fade-up" data-delay="200">
          <div class="flex items-center mb-4">
            <div class="h-10 w-10 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg mr-4">
              <span class="text-base font-bold">3</span>
            </div>
            <h3 class="text-xl font-semibold text-text-primary">
              Work/Design
            </h3>
          </div>
          <div class="pl-14">
            <p class="text-accent-tertiary mb-4">Developing high-fidelity designs that incorporate visual elements, branding, and user experience principles.</p>
            <div class="p-3 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block">
              <PaintBrushIcon class="h-6 w-6 text-accent-primary" />
            </div>
          </div>
        </div>
        
        <!-- Step 4: Assets & Delivery -->
        <div class="process-step-mobile animate-on-scroll" data-animation="fade-up" data-delay="300">
          <div class="flex items-center mb-4">
            <div class="h-10 w-10 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg mr-4">
              <span class="text-base font-bold">4</span>
            </div>
            <h3 class="text-xl font-semibold text-text-primary">
              Assets & Delivery
            </h3>
          </div>
          <div class="pl-14">
            <p class="text-accent-tertiary mb-4">Preparing and organizing design assets for development, ensuring they meet technical specifications.</p>
            <div class="p-3 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block">
              <ArchiveBoxIcon class="h-6 w-6 text-accent-primary" />
            </div>
          </div>
        </div>
        
        <!-- Step 5: Final & Test -->
        <div class="process-step-mobile animate-on-scroll" data-animation="fade-up" data-delay="400">
          <div class="flex items-center mb-4">
            <div class="h-10 w-10 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg mr-4">
              <span class="text-base font-bold">5</span>
            </div>
            <h3 class="text-xl font-semibold text-text-primary">
              Final & Test
            </h3>
          </div>
          <div class="pl-14">
            <p class="text-accent-tertiary mb-4">Quality assurance, testing, and final refinements to ensure the design meets all requirements.</p>
            <div class="p-3 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block">
              <CheckCircleIcon class="h-6 w-6 text-accent-primary" />
            </div>
          </div>
        </div>
        
        <!-- Step 6: After Design -->
        <div class="process-step-mobile animate-on-scroll" data-animation="fade-up" data-delay="500">
          <div class="flex items-center mb-4">
            <div class="h-10 w-10 rounded-full bg-accent-primary text-white flex items-center justify-center shadow-lg mr-4">
              <span class="text-base font-bold">6</span>
            </div>
            <h3 class="text-xl font-semibold text-text-primary">
              After Design
            </h3>
          </div>
          <div class="pl-14">
            <p class="text-accent-tertiary mb-4">Follow-up support, documentation, and continuous improvement based on feedback and analytics.</p>
            <div class="p-3 bg-background-alt/50 dark:bg-background/50 rounded-lg inline-block">
              <BoltIcon class="h-6 w-6 text-accent-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { 
  LightBulbIcon,
  PencilSquareIcon,
  PaintBrushIcon, 
  ArchiveBoxIcon, 
  CheckCircleIcon, 
  BoltIcon 
} from '@heroicons/vue/24/outline'

// i18n removed - using direct English text

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

/* Process step styling */
.process-point-wrapper {
  position: relative;
  z-index: 2;
}

.scale-step {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.process-step:hover .scale-step {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Timeline connector dots */
.process-point-wrapper::before,
.process-point-wrapper::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 25px;
  background-color: rgba(160, 160, 176, 0.3);
  z-index: -1;
}

.process-point-wrapper::before {
  top: -25px;
}

.process-point-wrapper::after {
  bottom: -25px;
}

/* First and last process steps */
.process-step:first-child .process-point-wrapper::before,
.process-step:last-child .process-point-wrapper::after {
  display: none;
}

/* Mobile process steps */
.process-step-mobile {
  position: relative;
  padding-left: 1rem;
}

.process-step-mobile::before {
  content: '';
  position: absolute;
  top: 30px;
  left: 19px;
  bottom: -12px;
  width: 1px;
  background-color: rgba(160, 160, 176, 0.3);
  z-index: 0;
}

.process-step-mobile:last-child::before {
  display: none;
}
</style>


<template>
  <section id="career" class="py-16 md:py-24 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div class="absolute top-[25%] right-[20%] w-72 h-72 rounded-full bg-accent-primary blur-3xl"></div>
      <div class="absolute bottom-[15%] left-[10%] w-80 h-80 rounded-full bg-accent-secondary blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section title -->
      <div class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {{ $t('sections.career.title') }}
        </h2>
        <div class="w-20 h-1 bg-accent-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto text-text-secondary text-lg">
          My professional journey and accomplishments in the design field
        </p>
      </div>

      <!-- Career stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-20"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
      >
        <!-- Years -->
        <div class="bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 text-center border border-accent-tertiary/10 shadow-lg">
          <div class="text-4xl md:text-5xl font-bold text-accent-primary mb-2">5+</div>
          <div class="text-text-primary font-medium">{{ $t('sections.career.experience') }}</div>
        </div>
        
        <!-- Clients -->
        <div class="bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 text-center border border-accent-tertiary/10 shadow-lg">
          <div class="text-4xl md:text-5xl font-bold text-accent-primary mb-2">20+</div>
          <div class="text-text-primary font-medium">{{ $t('sections.career.clients') }}</div>
        </div>
        
        <!-- Projects -->
        <div class="bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 text-center border border-accent-tertiary/10 shadow-lg">
          <div class="text-4xl md:text-5xl font-bold text-accent-primary mb-2">50+</div>
          <div class="text-text-primary font-medium">{{ $t('sections.career.projects') }}</div>
        </div>
      </div>

      <!-- Career timeline -->
      <div class="relative">
        <!-- Timeline connector (desktop) -->
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-tertiary/20 transform -translate-x-1/2"></div>
        
        <!-- Job 1 -->
        <div class="mb-12 md:mb-0 relative"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
        >
          <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
            <!-- Left column (even positions) -->
            <div class="md:text-right md:pr-12 mb-6 md:mb-0">
              <div class="inline-block md:hidden w-12 h-12 rounded-full bg-accent-primary/10 mb-4 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 class="text-xl font-semibold text-text-primary mb-1">Senior Product Designer</h3>
              <h4 class="text-lg text-accent-primary mb-3">Design Agency X</h4>
              <div class="inline-block px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-sm mb-4">2023 - Present</div>
              <p class="text-text-secondary mb-4 md:mb-0">Led design teams in creating user-centered solutions for enterprise clients, focusing on improving usability and conversion rates.</p>
            </div>
            
            <!-- Timeline dot (desktop) -->
            <div class="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-accent-primary transform -translate-x-1/2 shadow-lg shadow-accent-primary/20"></div>
            
            <!-- Right column (even positions) -->
            <div class="md:pl-12">
              <div class="hidden md:inline-block w-16 h-16 rounded-full bg-accent-primary/10 mb-4 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div class="bg-background-alt/40 dark:bg-background/70 rounded-lg p-5 border border-accent-tertiary/10">
                <h5 class="text-text-primary font-medium mb-3">Key Responsibilities:</h5>
                <ul class="list-disc pl-5 mb-4 text-text-secondary">
                  <li>Led design system development for enterprise clients</li>
                  <li>Mentored junior designers and provided design direction</li>
                  <li>Collaborated with development teams on implementation</li>
                </ul>
                
                <h5 class="text-text-primary font-medium mb-3">Technologies:</h5>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">Figma</span>
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">Sketch</span>
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">Adobe XD</span>
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">Adobe CC</span>
                </div>
                
                <h5 class="text-text-primary font-medium mb-2">Notable Achievement:</h5>
                <p class="text-text-secondary text-sm">Redesigned client's e-commerce platform resulting in a 35% increase in conversion rate and 25% reduction in cart abandonment.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Job 2 -->
        <div class="mb-12 md:mb-0 mt-20 relative"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
        >
          <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
            <!-- Left column (odd positions) -->
            <div class="md:pl-12 order-2 md:order-1">
              <div class="hidden md:inline-block w-16 h-16 rounded-full bg-accent-primary/10 mb-4 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div class="bg-background-alt/40 dark:bg-background/70 rounded-lg p-5 border border-accent-tertiary/10">
                <h5 class="text-text-primary font-medium mb-3">Key Responsibilities:</h5>
                <ul class="list-disc pl-5 mb-4 text-text-secondary">
                  <li>Designed intuitive interfaces for web and mobile applications</li>
                  <li>Conducted user research and usability testing</li>
                  <li>Created wireframes, mockups, and interactive prototypes</li>
                </ul>
                
                <h5 class="text-text-primary font-medium mb-3">Technologies:</h5>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">Figma</span>
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">InVision</span>
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">Principle</span>
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">Adobe CC</span>
                </div>
                
                <h5 class="text-text-primary font-medium mb-2">Notable Achievement:</h5>
                <p class="text-text-secondary text-sm">Led the UX design for a mobile banking app that won a industry design award and increased customer satisfaction scores by 40%.</p>
              </div>
            </div>
            
            <!-- Timeline dot (desktop) -->
            <div class="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-accent-primary transform -translate-x-1/2 shadow-lg shadow-accent-primary/20"></div>
            
            <!-- Right column (odd positions) -->
            <div class="md:text-right md:pr-12 mb-6 md:mb-0 order-1 md:order-2">
              <div class="inline-block md:hidden w-12 h-12 rounded-full bg-accent-primary/10 mb-4 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 class="text-xl font-semibold text-text-primary mb-1">UX/UI Designer</h3>
              <h4 class="text-lg text-accent-primary mb-3">Tech Company Y</h4>
              <div class="inline-block px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-sm mb-4">2020 - 2023</div>
              <p class="text-text-secondary mb-4 md:mb-0">Designed user-centered interfaces for web and mobile applications, with a focus on creating seamless and intuitive user experiences.</p>
            </div>
          </div>
        </div>
        
        <!-- Job 3 -->
        <div class="mt-20 relative"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 600 } }"
        >
          <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
            <!-- Left column (even positions) -->
            <div class="md:text-right md:pr-12 mb-6 md:mb-0">
              <div class="inline-block md:hidden w-12 h-12 rounded-full bg-accent-primary/10 mb-4 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 class="text-xl font-semibold text-text-primary mb-1">Junior Designer</h3>
              <h4 class="text-lg text-accent-primary mb-3">Creative Studio Z</h4>
              <div class="inline-block px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-sm mb-4">2018 - 2020</div>
              <p class="text-text-secondary mb-4 md:mb-0">Started my career designing marketing materials, brand identities, and basic web interfaces for small to medium-sized businesses.</p>
            </div>
            
            <!-- Timeline dot (desktop) -->
            <div class="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-accent-primary transform -translate-x-1/2 shadow-lg shadow-accent-primary/20"></div>
            
            <!-- Right column (even positions) -->
            <div class="md:pl-12">
              <div class="hidden md:inline-block w-16 h-16 rounded-full bg-accent-primary/10 mb-4 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div class="bg-background-alt/40 dark:bg-background/70 rounded-lg p-5 border border-accent-tertiary/10">
                <h5 class="text-text-primary font-medium mb-3">Key Responsibilities:</h5>
                <ul class="list-disc pl-5 mb-4 text-text-secondary">
                  <li>Designed marketing materials and brand assets</li>
                  <li>Created website mockups and basic UI elements</li>
                  <li>Assisted senior designers with various design tasks</li>
                </ul>
                
                <h5 class="text-text-primary font-medium mb-3">Technologies:</h5>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">Adobe CC</span>
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">Sketch</span>
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">Wordpress</span>
                  <span class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">HTML/CSS</span>
                </div>
                
                <h5 class="text-text-primary font-medium mb-2">Notable Achievement:</h5>
                <p class="text-text-secondary text-sm">Designed a brand identity for a local business that won a regional design award and led to a 50% increase in their customer engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

// Initialize i18n
const { t } = useI18n()
</script>

<style scoped>
/* Animation and layout utilities */
.leading-tight {
  line-height: 1.1;
}
.leading-relaxed {
  line-height: 1.6;
}

/* Timeline specific styles */
@media (min-width: 768px) {
  .timeline-item:nth-child(odd) .timeline-content {
    text-align: right;
    padding-right: 3rem;
  }
  
  .timeline-item:nth-child(even) .timeline-content {
    text-align: left;
    padding-left: 3rem;
  }
}

/* Optional hover effects for interactive elements */
.transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>


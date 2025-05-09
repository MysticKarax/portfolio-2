<template>
  <section id="case-studies" class="py-16 md:py-24 bg-background relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div class="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-accent-secondary blur-3xl"></div>
      <div class="absolute bottom-[10%] right-[15%] w-80 h-80 rounded-full bg-accent-primary blur-3xl"></div>
    </div>
    
    <!-- Decorative elements -->
    <div class="absolute top-32 right-16 w-16 h-16 border-2 border-accent-primary/20 rounded-lg rotate-45 hidden lg:block"></div>
    <div class="absolute bottom-32 left-16 w-20 h-20 border-2 border-accent-primary/20 rounded-xl -rotate-12 hidden lg:block"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section title -->
      <div class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Case Studies
        </h2>
        <div class="w-20 h-1 bg-accent-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto text-text-secondary text-lg">
          Detailed looks at selected projects
        </p>
      </div>

      <!-- Case studies grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Case Study 1: E-Commerce Redesign -->
        <div class="case-study-card animate-on-scroll bg-background dark:bg-background-alt border border-accent-tertiary/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
        >
          <!-- Image container -->
          <div class="relative">
            <img 
              src="https://via.placeholder.com/800x450/121212/A450E1?text=E-Commerce" 
              alt="E-Commerce Redesign" 
              class="w-full h-56 object-cover"
            />
            <!-- Overlay info badge -->
            <div class="absolute top-4 right-4 px-3 py-1 bg-accent-primary text-white text-xs font-medium rounded-full">
              UX/UI Design
            </div>
          </div>
          
          <!-- Content section -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-text-primary mb-2">E-Commerce Redesign</h3>
            <p class="text-accent-tertiary mb-4">Complete overhaul of an e-commerce platform to improve user experience and conversion rates.</p>
            
            <!-- Key metrics/results -->
            <div class="flex flex-wrap gap-4 mb-6">
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">+35%</span>
                <span class="text-xs text-accent-tertiary">Conversion Rate</span>
              </div>
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">-25%</span>
                <span class="text-xs text-accent-tertiary">Cart Abandonment</span>
              </div>
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">+42%</span>
                <span class="text-xs text-accent-tertiary">User Engagement</span>
              </div>
            </div>
            
            <!-- Technologies used -->
            <div class="mb-6">
              <p class="text-sm text-accent-tertiary mb-2">Technologies & Tools</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">Figma</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">User Testing</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">Heatmaps</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">A/B Testing</span>
              </div>
            </div>
            
            <!-- Read More link -->
            <a 
              href="#" 
              class="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors duration-300"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Case Study 2: Banking App -->
        <div class="case-study-card animate-on-scroll bg-background dark:bg-background-alt border border-accent-tertiary/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 600 } }"
        >
          <!-- Image container -->
          <div class="relative">
            <img 
              src="https://via.placeholder.com/800x450/121212/A450E1?text=Banking+App" 
              alt="Mobile Banking App" 
              class="w-full h-56 object-cover"
            />
            <!-- Overlay info badge -->
            <div class="absolute top-4 right-4 px-3 py-1 bg-accent-primary text-white text-xs font-medium rounded-full">
              Mobile Design
            </div>
          </div>
          
          <!-- Content section -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-text-primary mb-2">Mobile Banking App</h3>
            <p class="text-accent-tertiary mb-4">Redesign of a mobile banking application focusing on security and usability improvements.</p>
            
            <!-- Key metrics/results -->
            <div class="flex flex-wrap gap-4 mb-6">
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">+42%</span>
                <span class="text-xs text-accent-tertiary">Active Users</span>
              </div>
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">-38%</span>
                <span class="text-xs text-accent-tertiary">Support Tickets</span>
              </div>
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">92%</span>
                <span class="text-xs text-accent-tertiary">User Satisfaction</span>
              </div>
            </div>
            
            <!-- Technologies used -->
            <div class="mb-6">
              <p class="text-sm text-accent-tertiary mb-2">Technologies & Tools</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">Figma</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">InVision</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">User Research</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">Biometrics</span>
              </div>
            </div>
            
            <!-- Read More link -->
            <a 
              href="#" 
              class="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors duration-300"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Case Study 3: Data Analytics Dashboard -->
        <div class="case-study-card animate-on-scroll bg-background dark:bg-background-alt border border-accent-tertiary/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 700, duration: 600 } }"
        >
          <!-- Image container -->
          <div class="relative">
            <img 
              src="https://via.placeholder.com/800x450/121212/A450E1?text=Analytics+Dashboard" 
              alt="Data Analytics Dashboard" 
              class="w-full h-56 object-cover"
            />
            <!-- Overlay info badge -->
            <div class="absolute top-4 right-4 px-3 py-1 bg-accent-primary text-white text-xs font-medium rounded-full">
              Dashboard UX
            </div>
          </div>
          
          <!-- Content section -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-text-primary mb-2">Data Analytics Dashboard</h3>
            <p class="text-accent-tertiary mb-4">Designed an intuitive dashboard for complex data visualization and business intelligence.</p>
            
            <!-- Key metrics/results -->
            <div class="flex flex-wrap gap-4 mb-6">
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">-35%</span>
                <span class="text-xs text-accent-tertiary">Data Access Time</span>
              </div>
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">+28%</span>
                <span class="text-xs text-accent-tertiary">Staff Efficiency</span>
              </div>
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">98%</span>
                <span class="text-xs text-accent-tertiary">Task Completion</span>
              </div>
            </div>
            
            <!-- Technologies used -->
            <div class="mb-6">
              <p class="text-sm text-accent-tertiary mb-2">Technologies & Tools</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">Figma</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">Data Visualization</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">User Interviews</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">Accessibility</span>
              </div>
            </div>
            
            <!-- Read More link -->
            <a 
              href="#" 
              class="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors duration-300"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Case Study 4: Mobile App Onboarding -->
        <div class="case-study-card animate-on-scroll bg-background dark:bg-background-alt border border-accent-tertiary/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-animation="fade-up" data-delay="400">
          <!-- Image container -->
          <div class="relative">
            <img 
              src="https://via.placeholder.com/800x450/121212/A450E1?text=App+Onboarding" 
              alt="Mobile App Onboarding" 
              class="w-full h-56 object-cover"
            />
            <!-- Overlay info badge -->
            <div class="absolute top-4 right-4 px-3 py-1 bg-accent-primary text-white text-xs font-medium rounded-full">
              Mobile UX
            </div>
          </div>
          
          <!-- Content section -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-text-primary mb-2">Mobile App Onboarding</h3>
            <p class="text-accent-tertiary mb-4">Redesigning the onboarding experience to improve user activation and first-time user experience.</p>
            
            <!-- Key metrics/results -->
            <div class="flex flex-wrap gap-4 mb-6">
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">+67%</span>
                <span class="text-xs text-accent-tertiary">Completion Rate</span>
              </div>
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">-41%</span>
                <span class="text-xs text-accent-tertiary">Drop-off Rate</span>
              </div>
              <div class="metrics-badge">
                <span class="text-accent-primary font-semibold">+52%</span>
                <span class="text-xs text-accent-tertiary">User Activation</span>
              </div>
            </div>
            
            <!-- Technologies used -->
            <div class="mb-6">
              <p class="text-sm text-accent-tertiary mb-2">Technologies & Tools</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">Sketch</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">ProtoPie</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">User Testing</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">Mobile Design</span>
                <span class="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md">Analytics</span>
              </div>
            </div>
            
            <!-- Read More link -->
            <a 
              href="#" 
              class="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors duration-300"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// i18n removed - using direct English text

// Animation directive (same as other components)
const vMotion = {
  mounted(el, binding) {
    // Add initial state
    if (binding.value.initial) {
      Object.entries(binding.value.initial).forEach(([key, value]) => {
        if (key === 'opacity') {
          el.style.opacity = value;
        } else if (key === 'y') {
          el.style.transform = `translateY(${value}px)`;
        } else if (key === 'x') {
          el.style.transform = `translateX(${value}px)`;
        }
      });
    }
    
    // Add enter animation after a short delay
    setTimeout(() => {
      el.style.transition = `all ${binding.value.enter?.transition?.duration || 500}ms ease`;
      
      if (binding.value.enter) {
        Object.entries(binding.value.enter).forEach(([key, value]) => {
          if (key === 'opacity') {
            el.style.opacity = value;
          } else if (key === 'y') {
            el.style.transform = `translateY(${value}px)`;
          } else if (key === 'x') {
            el.style.transform = `translateX(${value}px)`;
          }
        });
      }
    }, binding.value.enter?.transition?.delay || 0);
  }
}
</script>

<style scoped>
.metrics-badge {
  @apply flex flex-col items-center justify-center px-3 py-2 bg-background-alt rounded-lg;
  min-width: 90px;
}

.case-study-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Animation and layout utilities */
.leading-tight {
  line-height: 1.1;
}
.leading-relaxed {
  line-height: 1.6;
}

/* Optional hover effects for interactive elements */
.transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Image hover effect */
.img-hover {
  transition: transform 0.5s ease;
}

.img-hover:hover {
  transform: scale(1.05);
}

/* Button hover effects */
.btn-hover {
  transition: all 0.3s ease;
}

.btn-hover:hover {
  box-shadow: 0 4px 12px rgba(164, 80, 225, 0.2);
}
</style>

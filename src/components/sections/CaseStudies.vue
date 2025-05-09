<template>
  <section id="case-studies" class="py-16 md:py-24 relative overflow-hidden">
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
          {{ $t('sections.case_studies.title') }}
        </h2>
        <div class="w-20 h-1 bg-accent-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto text-text-secondary text-lg">
          {{ $t('sections.case_studies.subtitle') }}
        </p>
      </div>

      <!-- Case studies grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        <!-- Case Study 1 -->
        <div class="bg-background-alt/40 dark:bg-background/70 rounded-xl overflow-hidden border border-accent-tertiary/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
        >
          <!-- Project thumbnail -->
          <div class="h-56 relative">
            <img 
              src="https://via.placeholder.com/800x450/121212/A450E1?text=E-Commerce+Redesign" 
              alt="E-Commerce App Redesign" 
              class="w-full h-full object-cover"
            />
            
            <!-- Overlay with tags -->
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">UX Design</span>
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">UI Design</span>
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">User Testing</span>
              </div>
            </div>
          </div>
          
          <!-- Project content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-text-primary mb-2">E-Commerce App Redesign</h3>
            <p class="text-text-secondary text-sm mb-6">A complete overhaul of an e-commerce platform to improve user experience and increase conversions.</p>
            
            <!-- Project details -->
            <div class="grid grid-cols-1 gap-4 mb-6">
              <!-- Challenge -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Challenge</h4>
                <p class="text-text-secondary text-sm">The client's existing platform had a high cart abandonment rate (68%) and confusing navigation that frustrated users.</p>
              </div>
              
              <!-- Solution -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Solution</h4>
                <p class="text-text-secondary text-sm">Streamlined the checkout process, redesigned the product page layout, and implemented an intuitive filtering system.</p>
              </div>
              
              <!-- Results -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Results</h4>
                <div class="flex flex-wrap gap-4 mt-2">
                  <div class="flex items-center gap-2">
                    <div class="text-accent-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span class="text-text-secondary text-sm">35% increase in conversion rate</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="text-accent-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    </div>
                    <span class="text-text-secondary text-sm">25% reduction in cart abandonment</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Read more button -->
            <a 
              href="#" 
              class="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors duration-300"
            >
              {{ $t('sections.case_studies.read_more') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Case Study 2 -->
        <div class="bg-background-alt/40 dark:bg-background/70 rounded-xl overflow-hidden border border-accent-tertiary/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 600 } }"
        >
          <!-- Project thumbnail -->
          <div class="h-56 relative">
            <img 
              src="https://via.placeholder.com/800x450/121212/A450E1?text=Banking+App" 
              alt="Mobile Banking App" 
              class="w-full h-full object-cover"
            />
            
            <!-- Overlay with tags -->
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">Mobile Design</span>
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">User Research</span>
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">Prototyping</span>
              </div>
            </div>
          </div>
          
          <!-- Project content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-text-primary mb-2">Mobile Banking App</h3>
            <p class="text-text-secondary text-sm mb-6">A redesign of a mobile banking application to enhance security and improve the user experience.</p>
            
            <!-- Project details -->
            <div class="grid grid-cols-1 gap-4 mb-6">
              <!-- Challenge -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Challenge</h4>
                <p class="text-text-secondary text-sm">The existing app had low user engagement and security features that were difficult to access, leading to customer frustration.</p>
              </div>
              
              <!-- Solution -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Solution</h4>
                <p class="text-text-secondary text-sm">Redesigned the UI with a focus on intuitive navigation, improved biometric authentication, and simplified transaction flows.</p>
              </div>
              
              <!-- Results -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Results</h4>
                <div class="flex flex-wrap gap-4 mt-2">
                  <div class="flex items-center gap-2">
                    <div class="text-accent-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span class="text-text-secondary text-sm">42% increase in daily active users</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="text-accent-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </div>
                    <span class="text-text-secondary text-sm">92% user satisfaction rating</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Read more button -->
            <a 
              href="#" 
              class="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors duration-300"
            >
              {{ $t('sections.case_studies.read_more') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Case Study 3 -->
        <div class="bg-background-alt/40 dark:bg-background/70 rounded-xl overflow-hidden border border-accent-tertiary/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 700, duration: 600 } }"
        >
          <!-- Project thumbnail -->
          <div class="h-56 relative">
            <img 
              src="https://via.placeholder.com/800x450/121212/A450E1?text=Dashboard" 
              alt="Data Analytics Dashboard" 
              class="w-full h-full object-cover"
            />
            
            <!-- Overlay with tags -->
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">Dashboard Design</span>
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">Data Visualization</span>
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">UX Design</span>
              </div>
            </div>
          </div>
          
          <!-- Project content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-text-primary mb-2">Data Analytics Dashboard</h3>
            <p class="text-text-secondary text-sm mb-6">A comprehensive dashboard for visualizing complex data sets and providing actionable business intelligence.</p>
            
            <!-- Project details -->
            <div class="grid grid-cols-1 gap-4 mb-6">
              <!-- Challenge -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Challenge</h4>
                <p class="text-text-secondary text-sm">The client needed a way to visualize large datasets in a meaningful way and derive actionable insights from complex information.</p>
              </div>
              
              <!-- Solution -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Solution</h4>
                <p class="text-text-secondary text-sm">Created a modular dashboard with customizable visualization widgets, intuitive filtering, and automated reporting features.</p>
              </div>
              
              <!-- Results -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Results</h4>
                <div class="flex flex-wrap gap-4 mt-2">
                  <div class="flex items-center gap-2">
                    <div class="text-accent-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span class="text-text-secondary text-sm">65% reduction in data analysis time</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="text-accent-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span class="text-text-secondary text-sm">28% improvement in decision-making</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Read more button -->
            <a 
              href="#" 
              class="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors duration-300"
            >
              {{ $t('sections.case_studies.read_more') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Case Study 4 -->
        <div class="bg-background-alt/40 dark:bg-background/70 rounded-xl overflow-hidden border border-accent-tertiary/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 900, duration: 600 } }"
        >
          <!-- Project thumbnail -->
          <div class="h-56 relative">
            <img 
              src="https://via.placeholder.com/800x450/121212/A450E1?text=Health+App" 
              alt="Health & Wellness App" 
              class="w-full h-full object-cover"
            />
            
            <!-- Overlay with tags -->
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">Mobile App</span>
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">Interaction Design</span>
                <span class="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">Health Tech</span>
              </div>
            </div>
          </div>
          
          <!-- Project content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-text-primary mb-2">Health & Wellness App</h3>
            <p class="text-text-secondary text-sm mb-6">A mobile application designed to help users track health metrics, set wellness goals, and build healthy habits.</p>
            
            <!-- Project details -->
            <div class="grid grid-cols-1 gap-4 mb-6">
              <!-- Challenge -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Challenge</h4>
                <p class="text-text-secondary text-sm">The client wanted to create an engaging wellness app that would help users stay motivated and consistent with their health goals.</p>
              </div>
              
              <!-- Solution -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Solution</h4>
                <p class="text-text-secondary text-sm">Designed an intuitive interface with gamification elements, personalized insights, and social features to encourage regular usage.</p>
              </div>
              
              <!-- Results -->
              <div>
                <h4 class="text-base font-medium text-accent-primary mb-1">Results</h4>
                <div class="flex flex-wrap gap-4 mt-2">
                  <div class="flex items-center gap-2">
                    <div class="text-accent-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span class="text-text-secondary text-sm">85% user retention after 3 months</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="text-accent-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <span class="text-text-secondary text-sm">4.8/5 average app store rating</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Read more button -->
            <a 
              href="#" 
              class="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors duration-300"
            >
              {{ $t('sections.case_studies.read_more') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- View more button -->
      <div class="text-center mt-16"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1100, duration: 600 } }"
      >
        <a 
          href="#projects" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-white rounded-full transition-colors duration-300 font-medium text-base shadow-lg shadow-accent-primary/20"
        >
          {{ $t('sections.case_studies.view_more') }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
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
    // Make sure binding.value exists
    if (!binding.value) {
      return;
    }
    
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
      el.style.transition = `all ${binding.value?.enter?.transition?.duration || 500}ms ease`;
      
      if (binding.value?.enter) {
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
    }, binding.value?.enter?.transition?.delay || 0);
  }
}
</script>

<style scoped>
/* Card hover effects */
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
}

/* Animation and layout utilities */
.leading-tight {
  line-height: 1.1;
}
.leading-relaxed {
  line-height: 1.6;
}

/* Optional transitions */
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
</style>

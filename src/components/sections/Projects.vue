<template>
  <section id="projects" class="py-16 md:py-24 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div
        class="absolute top-[10%] left-[10%] w-80 h-80 rounded-full bg-accent-primary blur-3xl"
      ></div>
      <div
        class="absolute bottom-[10%] right-[10%] w-72 h-72 rounded-full bg-accent-secondary blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section title -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {{ $t('sections.projects.title') }}
        </h2>
        <div class="w-20 h-1 bg-accent-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto text-text-secondary text-lg">
          Selected projects showcasing my design approach and problem-solving skills
        </p>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- Project 1 -->
        <div
          class="group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400/121212/A450E1?text=Project+1"
              alt="E-Commerce App Redesign"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Overlay with tags on hover -->
            <div
              class="absolute inset-0 bg-background/80 dark:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6"
            >
              <h3 class="text-lg font-semibold text-text-primary mb-3">E-Commerce App Redesign</h3>
              <p class="text-text-secondary text-sm mb-4 text-center">
                Complete redesign of an e-commerce platform focusing on user experience
              </p>
              <div class="flex flex-wrap justify-center gap-2 mb-4">
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >UX Design</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >UI Design</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >Prototyping</span
                >
              </div>
              <a
                href="#"
                class="px-4 py-2 text-sm rounded-full bg-accent-primary hover:bg-accent-secondary text-white transition-colors duration-300"
              >
                {{ $t('sections.projects.view_case') }}
              </a>
            </div>
          </div>
          <!-- Project Info (visible without hover) -->
          <div class="p-6">
            <h3
              class="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300"
            >
              E-Commerce App Redesign
            </h3>
            <p class="text-text-secondary text-sm mb-4">
              Complete redesign of an e-commerce platform focusing on user experience
            </p>
            <div class="flex gap-2">
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >UX Design</span
              >
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >UI Design</span
              >
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div
          class="group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400/121212/A450E1?text=Project+2"
              alt="Finance Dashboard"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Overlay with tags on hover -->
            <div
              class="absolute inset-0 bg-background/80 dark:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6"
            >
              <h3 class="text-lg font-semibold text-text-primary mb-3">Finance Dashboard</h3>
              <p class="text-text-secondary text-sm mb-4 text-center">
                Data visualization dashboard for personal finance management
              </p>
              <div class="flex flex-wrap justify-center gap-2 mb-4">
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >Dashboard Design</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >Data Visualization</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >User Testing</span
                >
              </div>
              <a
                href="#"
                class="px-4 py-2 text-sm rounded-full bg-accent-primary hover:bg-accent-secondary text-white transition-colors duration-300"
              >
                {{ $t('sections.projects.view_case') }}
              </a>
            </div>
          </div>
          <!-- Project Info (visible without hover) -->
          <div class="p-6">
            <h3
              class="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300"
            >
              Finance Dashboard
            </h3>
            <p class="text-text-secondary text-sm mb-4">
              Data visualization dashboard for personal finance management
            </p>
            <div class="flex gap-2">
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >Dashboard</span
              >
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >Data Viz</span
              >
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div
          class="group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400/121212/A450E1?text=Project+3"
              alt="Health Tracking App"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Overlay with tags on hover -->
            <div
              class="absolute inset-0 bg-background/80 dark:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6"
            >
              <h3 class="text-lg font-semibold text-text-primary mb-3">Health Tracking App</h3>
              <p class="text-text-secondary text-sm mb-4 text-center">
                Mobile app for tracking fitness and health metrics with visual progress
              </p>
              <div class="flex flex-wrap justify-center gap-2 mb-4">
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >Mobile Design</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >User Research</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >Interactive Prototype</span
                >
              </div>
              <a
                href="#"
                class="px-4 py-2 text-sm rounded-full bg-accent-primary hover:bg-accent-secondary text-white transition-colors duration-300"
              >
                {{ $t('sections.projects.view_case') }}
              </a>
            </div>
          </div>
          <!-- Project Info (visible without hover) -->
          <div class="p-6">
            <h3
              class="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300"
            >
              Health Tracking App
            </h3>
            <p class="text-text-secondary text-sm mb-4">
              Mobile app for tracking fitness and health metrics with visual progress
            </p>
            <div class="flex gap-2">
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >Mobile</span
              >
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >UX Research</span
              >
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div
          class="group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20 md:hidden lg:block"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 600 } }"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400/121212/A450E1?text=Project+4"
              alt="Smart Home Interface"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Overlay with tags on hover -->
            <div
              class="absolute inset-0 bg-background/80 dark:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6"
            >
              <h3 class="text-lg font-semibold text-text-primary mb-3">Smart Home Interface</h3>
              <p class="text-text-secondary text-sm mb-4 text-center">
                IoT control interface for managing connected home devices
              </p>
              <div class="flex flex-wrap justify-center gap-2 mb-4">
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >IoT Design</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >UI/UX</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >Product Design</span
                >
              </div>
              <a
                href="#"
                class="px-4 py-2 text-sm rounded-full bg-accent-primary hover:bg-accent-secondary text-white transition-colors duration-300"
              >
                {{ $t('sections.projects.view_case') }}
              </a>
            </div>
          </div>
          <!-- Project Info (visible without hover) -->
          <div class="p-6">
            <h3
              class="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300"
            >
              Smart Home Interface
            </h3>
            <p class="text-text-secondary text-sm mb-4">
              IoT control interface for managing connected home devices
            </p>
            <div class="flex gap-2">
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >IoT</span
              >
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >Product Design</span
              >
            </div>
          </div>
        </div>

        <!-- Project 5 -->
        <div
          class="group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20 md:hidden lg:block"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 600 } }"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400/121212/A450E1?text=Project+5"
              alt="AR Shopping Experience"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Overlay with tags on hover -->
            <div
              class="absolute inset-0 bg-background/80 dark:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6"
            >
              <h3 class="text-lg font-semibold text-text-primary mb-3">AR Shopping Experience</h3>
              <p class="text-text-secondary text-sm mb-4 text-center">
                Augmented reality interface for trying furniture in your home
              </p>
              <div class="flex flex-wrap justify-center gap-2 mb-4">
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >AR/VR</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >Mobile</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >3D Modeling</span
                >
              </div>
              <a
                href="#"
                class="px-4 py-2 text-sm rounded-full bg-accent-primary hover:bg-accent-secondary text-white transition-colors duration-300"
              >
                {{ $t('sections.projects.view_case') }}
              </a>
            </div>
          </div>
          <!-- Project Info (visible without hover) -->
          <div class="p-6">
            <h3
              class="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300"
            >
              AR Shopping Experience
            </h3>
            <p class="text-text-secondary text-sm mb-4">
              Augmented reality interface for trying furniture in your home
            </p>
            <div class="flex gap-2">
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >AR/VR</span
              >
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >Mobile</span
              >
            </div>
          </div>
        </div>

        <!-- Project 6 -->
        <div
          class="group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20 md:hidden lg:block"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 1200, duration: 600 } }"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400/121212/A450E1?text=Project+6"
              alt="Travel Booking Platform"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Overlay with tags on hover -->
            <div
              class="absolute inset-0 bg-background/80 dark:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6"
            >
              <h3 class="text-lg font-semibold text-text-primary mb-3">Travel Booking Platform</h3>
              <p class="text-text-secondary text-sm mb-4 text-center">
                Comprehensive travel booking experience with personalized recommendations
              </p>
              <div class="flex flex-wrap justify-center gap-2 mb-4">
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >Web App</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >UX Research</span
                >
                <span
                  class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >Service Design</span
                >
              </div>
              <a
                href="#"
                class="px-4 py-2 text-sm rounded-full bg-accent-primary hover:bg-accent-secondary text-white transition-colors duration-300"
              >
                {{ $t('sections.projects.view_case') }}
              </a>
            </div>
          </div>
          <!-- Project Info (visible without hover) -->
          <div class="p-6">
            <h3
              class="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300"
            >
              Travel Booking Platform
            </h3>
            <p class="text-text-secondary text-sm mb-4">
              Comprehensive travel booking experience with personalized recommendations
            </p>
            <div class="flex gap-2">
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >Web App</span
              >
              <span
                class="px-2 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary dark:text-accent-tertiary/70"
                >Service Design</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- View More Projects button -->
      <div
        class="text-center mt-12 md:mt-16"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1400, duration: 600 } }"
      >
        <a
          href="#"
          class="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-white rounded-full transition-colors duration-300 font-medium text-base shadow-lg shadow-accent-primary/20"
        >
          {{ $t('sections.projects.view_more') }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// Initialize i18n
const { t } = useI18n();

// Animation directive (same as other components)
const vMotion = {
  mounted(el, binding) {
    // Check if binding.value exists before accessing its properties
    if (!binding?.value) return;

    // Add initial state if it exists
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
  },
};
</script>

<style scoped>
/* Project card hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

.group:hover .group-hover\:text-accent-primary {
  color: var(--accent-primary);
}

/* Animation and layout utilities */
.leading-tight {
  line-height: 1.1;
}

.leading-relaxed {
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-card-mobile {
    margin-bottom: 1.5rem;
  }
}

/* Button hover effects */
.btn-hover {
  transition: all 0.3s ease;
}

.btn-hover:hover {
  box-shadow: 0 4px 12px rgba(164, 80, 225, 0.2);
}

/* Image hover effects */
.img-hover {
  transition: transform 0.5s ease;
}

.img-hover:hover {
  transform: scale(1.05);
}
</style>

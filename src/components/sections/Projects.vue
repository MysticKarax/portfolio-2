<template>
  <section
    id="projects"
    class="py-16 md:py-24 bg-background-alt/30 dark:bg-background/50 relative overflow-hidden"
  >
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
      <div class="text-center mb-16 animate-on-scroll" data-animation="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">Projects</h2>
        <div class="w-20 h-1 bg-accent-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto text-text-secondary text-lg">
          Selected projects showcasing my design approach and problem-solving skills
        </p>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- Project 1 -->
        <div
          class="project-card group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20 animate-on-scroll"
          data-animation="fade-up"
          data-delay="200"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://picsum.photos/600/400?random=1"
              alt="E-Commerce App Redesign"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              @load="imageLoaded(1)"
              @error="handleImageError(1)"
            />
            <!-- Loading state -->
            <div
              v-if="loadingImages[1]"
              class="absolute inset-0 flex items-center justify-center bg-background-alt/80 dark:bg-background/80"
            >
              <LoadingSpinner :size="40" color="text-accent-primary" />
            </div>
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
                View Case Study
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
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >UX Design</span
              >
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >UI Design</span
              >
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div
          class="project-card group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20 animate-on-scroll"
          data-animation="fade-up"
          data-delay="300"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://picsum.photos/600/400?random=2"
              alt="Finance Dashboard"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              @load="imageLoaded(2)"
              @error="handleImageError(2)"
            />
            <!-- Loading state -->
            <div
              v-if="loadingImages[2]"
              class="absolute inset-0 flex items-center justify-center bg-background-alt/80 dark:bg-background/80"
            >
              <LoadingSpinner :size="40" color="text-accent-primary" />
            </div>
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
                View Case Study
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
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >Dashboard</span
              >
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >Data Viz</span
              >
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div
          class="project-card group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20 animate-on-scroll"
          data-animation="fade-up"
          data-delay="400"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://picsum.photos/600/400?random=3"
              alt="Health Tracking App"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              @load="imageLoaded(3)"
              @error="handleImageError(3)"
            />
            <!-- Loading state -->
            <div
              v-if="loadingImages[3]"
              class="absolute inset-0 flex items-center justify-center bg-background-alt/80 dark:bg-background/80"
            >
              <LoadingSpinner :size="40" color="text-accent-primary" />
            </div>
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
                View Case Study
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
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >Mobile</span
              >
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >UX Research</span
              >
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div
          class="project-card group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20 md:hidden lg:block animate-on-scroll"
          data-animation="fade-up"
          data-delay="500"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://picsum.photos/600/400?random=4"
              alt="Smart Home Interface"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              @load="imageLoaded(4)"
              @error="handleImageError(4)"
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
                View Case Study
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
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >IoT</span
              >
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >Product Design</span
              >
            </div>
          </div>
        </div>

        <!-- Project 5 -->
        <div
          class="project-card group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20 md:hidden lg:block animate-on-scroll"
          data-animation="fade-up"
          data-delay="600"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://picsum.photos/600/400?random=5"
              alt="AR Shopping Experience"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              @load="imageLoaded(5)"
              @error="handleImageError(5)"
            />
            <!-- Loading state -->
            <div
              v-if="loadingImages[5]"
              class="absolute inset-0 flex items-center justify-center bg-background-alt/80 dark:bg-background/80"
            >
              <LoadingSpinner :size="40" color="text-accent-primary" />
            </div>
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
                View Case Study
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
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >AR/VR</span
              >
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >Mobile</span
              >
            </div>
          </div>
        </div>

        <!-- Project 6 -->
        <div
          class="project-card group relative overflow-hidden rounded-xl shadow-lg bg-background-alt dark:bg-background/70 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/10 hover:border-accent-primary/20 md:hidden lg:block animate-on-scroll"
          data-animation="fade-up"
          data-delay="700"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              src="https://picsum.photos/600/400?random=6"
              alt="Travel Booking Platform"
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              @load="imageLoaded(6)"
              @error="handleImageError(6)"
            />
            <!-- Loading state -->
            <div
              v-if="loadingImages[6]"
              class="absolute inset-0 flex items-center justify-center bg-background-alt/80 dark:bg-background/80"
            >
              <LoadingSpinner :size="40" color="text-accent-primary" />
            </div>
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
                View Case Study
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
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >Web App</span
              >
              <span class="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                >Service Design</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue';

// Loading state management
const loadingImages = ref({});

// Initialize loading states
onMounted(() => {
  // Set initial loading state for all projects
  for (let i = 1; i <= 6; i++) {
    loadingImages.value[i] = true;
  }

  // Animation on scroll setup
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const animation = el.dataset.animation || 'fade-up';
          const delay = el.dataset.delay || 0;

          setTimeout(() => {
            el.classList.add(`animate-${animation}`);
            el.style.opacity = 1;
          }, delay);

          // Unobserve after animation
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1 },
  );

  animatedElements.forEach((el) => {
    el.style.opacity = 0;
    observer.observe(el);
  });
});

// Image handling methods
const imageLoaded = (projectId) => {
  loadingImages.value[projectId] = false;
};

const handleImageError = (projectId) => {
  loadingImages.value[projectId] = false;
  console.error(`Failed to load image for project ${projectId}`);
  // Could set a fallback image here if needed
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

/* Animation classes */
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

.project-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Fix for line-clamp in some browsers */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

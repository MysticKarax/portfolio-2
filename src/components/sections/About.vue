<template>
  <section
    id="about"
    class="py-16 md:py-24 bg-background-alt/30 dark:bg-background/50 relative overflow-hidden"
  >
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div
        class="absolute top-[20%] right-[5%] w-80 h-80 rounded-full bg-accent-primary blur-3xl"
      ></div>
      <div
        class="absolute bottom-[5%] left-[15%] w-96 h-96 rounded-full bg-accent-secondary blur-3xl"
      ></div>
    </div>

    <!-- Decorative elements -->
    <div
      class="absolute top-20 left-10 w-24 h-24 border-2 border-accent-primary/20 rounded-lg rotate-12 hidden lg:block"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-primary/20 rounded-full hidden lg:block"
    ></div>
    <div
      class="absolute top-40 right-20 w-6 h-6 bg-accent-primary/20 rounded-full hidden lg:block"
    ></div>
    <div
      class="absolute bottom-40 left-20 w-10 h-10 bg-accent-primary/20 rounded-lg rotate-45 hidden lg:block"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section title -->
      <div class="text-center mb-16 animate-on-scroll" data-animation="fade-up" data-delay="0">
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">About Me</h2>
        <div class="w-20 h-1 bg-accent-primary mx-auto mb-6"></div>
        <p class="text-xl text-accent-primary font-medium max-w-2xl mx-auto">
          Designing with passion for Problem Solving
        </p>
      </div>

      <!-- About content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
        <!-- Profile image column -->
        <div
          class="order-2 lg:order-1 animate-on-scroll"
          data-animation="fade-right"
          data-delay="300"
        >
          <div class="relative">
            <!-- Image frame with decorative elements -->
            <div class="absolute inset-0 bg-accent-primary/10 rounded-xl transform rotate-3"></div>
            <div
              class="absolute inset-0 border-2 border-accent-primary/20 rounded-xl transform -rotate-2"
            ></div>

            <!-- Profile image -->
            <div class="relative rounded-xl overflow-hidden border-2 border-accent-tertiary/10">
              <img
                src="/yo-2.png"
                alt="Jordi - Product Designer"
                class="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105 about-img"
              />
            </div>

            <!-- Floating badge/element -->
            <div
              class="absolute -bottom-6 -right-6 bg-background dark:bg-background-alt p-4 rounded-xl shadow-xl border border-accent-tertiary/10"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center text-white"
                >
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-text-secondary text-xs">Experience</div>
                  <div class="text-text-primary font-semibold">5+ Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- About text column -->
        <div
          class="order-1 lg:order-2 animate-on-scroll"
          data-animation="fade-left"
          data-delay="300"
        >
          <!-- Personal introduction -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-text-primary mb-4">Personal Journey</h3>
            <p class="text-text-secondary mb-4">
              As a product designer, I focus on creating intuitive and impactful digital
              experiences. My approach combines aesthetic sensibility with user-centered
              functionality.
            </p>
            <p class="text-text-secondary">
              I began my design career after studying Interaction Design, and have since worked with
              clients ranging from startups to Fortune 500 companies. My approach combines creative
              problem-solving with data-driven insights to create designs that are both beautiful
              and functional.
            </p>
          </div>

          <!-- Design philosophy -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-text-primary mb-4">Design Philosophy</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Value 1 -->
              <div
                class="bg-background-alt/40 dark:bg-background/70 p-5 rounded-lg border border-accent-tertiary/10"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary"
                  >
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 class="font-medium text-text-primary">User-Centric</h4>
                </div>
                <p class="text-text-secondary text-sm">
                  Always putting the user first, designing experiences that solve real problems in
                  intuitive ways.
                </p>
              </div>

              <!-- Value 2 -->
              <div
                class="bg-background-alt/40 dark:bg-background/70 p-5 rounded-lg border border-accent-tertiary/10"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary"
                  >
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h4 class="font-medium text-text-primary">Creative Problem-Solving</h4>
                </div>
                <p class="text-text-secondary text-sm">
                  Finding innovative solutions to complex problems through creative thinking and
                  design principles.
                </p>
              </div>

              <!-- Value 3 -->
              <div
                class="bg-background-alt/40 dark:bg-background/70 p-5 rounded-lg border border-accent-tertiary/10"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary"
                  >
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 class="font-medium text-text-primary">Attention to Detail</h4>
                </div>
                <p class="text-text-secondary text-sm">
                  Carefully considering every aspect of the design, ensuring quality and
                  craftsmanship in every pixel.
                </p>
              </div>

              <!-- Value 4 -->
              <div
                class="bg-background-alt/40 dark:bg-background/70 p-5 rounded-lg border border-accent-tertiary/10"
              >
                <div class="flex items-center gap-3 mb-2">
                  <div
                    class="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary"
                  >
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
                        d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                      />
                    </svg>
                  </div>
                  <h4 class="font-medium text-text-primary">Collaborative</h4>
                </div>
                <p class="text-text-secondary text-sm">
                  Working closely with stakeholders, developers, and other designers to create
                  cohesive and effective solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial section -->
      <div class="max-w-3xl mx-auto animate-on-scroll" data-animation="fade-up" data-delay="500">
        <div
          class="bg-background-alt/40 dark:bg-background/70 p-8 md:p-10 rounded-xl border border-accent-tertiary/10 shadow-lg relative"
        >
          <!-- Quote marks -->
          <div class="absolute -top-5 -left-5 text-accent-primary/10 text-8xl font-serif">"</div>
          <div class="absolute -bottom-16 -right-5 text-accent-primary/10 text-8xl font-serif">
            "
          </div>

          <!-- Quote content -->
          <div class="relative">
            <p class="text-lg md:text-xl text-text-primary italic mb-6">
              Jordi's approach to design is both methodical and creative. His work consistently
              exceeds expectations, and his ability to translate complex requirements into elegant
              solutions is remarkable.
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-accent-primary/10 overflow-hidden mr-4">
                <img src="/claire-mitchell.jpg" alt="Client" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="text-text-primary font-medium">Claire Mitchell</h4>
                <p class="text-accent-primary text-sm">Product Manager, Tech Company Y</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

// i18n removed - using direct English text

// Animation on scroll functionality
onMounted(() => {
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
</script>

<style scoped>
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

.about-img {
  mask-image: linear-gradient(to bottom, black 80%, transparent);
}
</style>

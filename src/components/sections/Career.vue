<template>
  <section id="career" class="py-20 bg-background-alt/30 dark:bg-background/50">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll" data-animation="fade-up">
          Career Path
        </h2>
        <div
          class="w-24 h-1 bg-accent-primary mx-auto rounded-full mb-6 animate-on-scroll"
          data-animation="scale-x"
          data-delay="200"
        ></div>
        <p
          class="text-lg text-accent-tertiary animate-on-scroll"
          data-animation="fade-up"
          data-delay="300"
        >
          My professional journey and experience across various roles and companies
        </p>
      </div>

      <!-- Statistics Display -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-24">
        <!-- Years of Experience -->
        <div
          class="stat-card bg-background dark:bg-background-alt border border-accent-tertiary/20 rounded-xl p-6 text-center animate-on-scroll"
          data-animation="fade-up"
          data-delay="100"
        >
          <div
            class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-primary/10 mb-4"
          >
            <ClockIcon class="h-8 w-8 text-accent-primary" />
          </div>
          <h3 class="text-4xl font-bold text-accent-primary mb-2 counter" data-target="5">0</h3>
          <p class="text-text-primary">Years of Experience</p>
        </div>

        <!-- Clients Worldwide -->
        <div
          class="stat-card bg-background dark:bg-background-alt border border-accent-tertiary/20 rounded-xl p-6 text-center animate-on-scroll"
          data-animation="fade-up"
          data-delay="200"
        >
          <div
            class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-primary/10 mb-4"
          >
            <GlobeAltIcon class="h-8 w-8 text-accent-primary" />
          </div>
          <h3 class="text-4xl font-bold text-accent-primary mb-2 counter" data-target="40">0</h3>
          <p class="text-text-primary">Clients Worldwide</p>
        </div>

        <!-- Completed Projects -->
        <div
          class="stat-card bg-background dark:bg-background-alt border border-accent-tertiary/20 rounded-xl p-6 text-center animate-on-scroll"
          data-animation="fade-up"
          data-delay="300"
        >
          <div
            class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-primary/10 mb-4"
          >
            <ClipboardDocumentCheckIcon class="h-8 w-8 text-accent-primary" />
          </div>
          <h3 class="text-4xl font-bold text-accent-primary mb-2 counter" data-target="100">0</h3>
          <p class="text-text-primary">Completed Projects</p>
        </div>
      </div>

      <!-- Career Timeline -->
      <div class="relative career-timeline">
        <!-- Timeline line (visible on larger screens) -->
        <div
          class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-tertiary/30 transform -translate-x-1/2 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-accent-primary before:transform before:origin-top"
        ></div>

        <!-- Timeline Events -->
        <div class="space-y-12 md:space-y-0">
          <!-- Role 1 -->
          <div class="timeline-item md:grid md:grid-cols-2 relative">
            <!-- Left column (even items) - visible on md+ screens -->
            <div class="hidden md:block"></div>

            <!-- Center dot - visible on md+ screens -->
            <div
              class="hidden md:block absolute left-1/2 top-7 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent-primary z-10"
            ></div>

            <!-- Right column (odd items) -->
            <div class="timeline-content md:pl-12 animate-on-scroll" data-animation="fade-right">
              <div
                class="bg-background dark:bg-background-alt p-6 rounded-xl border border-accent-tertiary/20 relative career-card"
              >
                <span
                  class="timeline-date px-4 py-1 bg-accent-primary text-white text-sm rounded-full absolute top-0 right-6 transform -translate-y-1/2"
                  >2022 - Present</span
                >
                <div class="flex items-start">
                  <div class="company-logo mr-4 flex-shrink-0">
                    <div
                      class="w-12 h-12 rounded-lg bg-background-alt/70 dark:bg-background/70 flex items-center justify-center border border-accent-tertiary/30"
                    >
                      <img
                        src="https://picsum.photos/600/400?random=6"
                        alt="DesignLab Interactive"
                        class="w-8 h-8 object-contain"
                        onerror="this.src='/JordiLogo.jpg'; this.classList.add('w-6', 'h-6');"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-text-primary mb-1">
                      Senior Product Designer
                    </h3>
                    <h4 class="text-accent-primary mb-3">DesignLab Interactive</h4>
                  </div>
                </div>
                <p class="text-accent-tertiary mb-4">
                  Leading the design team for enterprise SaaS products with a focus on improving
                  user experience and adoption rates.
                </p>
                <div class="space-y-2">
                  <div class="flex items-start">
                    <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p class="text-text-secondary">
                      Increased user engagement by 45% through comprehensive UX redesign
                    </p>
                  </div>
                  <div class="flex items-start">
                    <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p class="text-text-secondary">
                      Established design system used across 12 product teams
                    </p>
                  </div>
                  <div class="flex items-start">
                    <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p class="text-text-secondary">
                      Led a team of 6 designers across multiple product initiatives
                    </p>
                  </div>
                </div>

                <div class="mt-5 pt-4 border-t border-accent-tertiary/20">
                  <p class="text-sm text-accent-tertiary mb-2 font-medium">Technologies & Tools</p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                      >Figma</span
                    >
                    <span
                      class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                      >Webflow</span
                    >
                    <span
                      class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                      >Adobe CC</span
                    >
                    <span
                      class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                      >Zeplin</span
                    >
                  </div>
                </div>

                <div class="mt-4 pt-0">
                  <button
                    @click="toggleDetails(1)"
                    class="text-sm font-medium text-accent-primary flex items-center hover:text-accent-secondary transition-colors"
                  >
                    <span v-if="expandedItems[1]">Hide Details</span>
                    <span v-else>Show Details</span>
                    <ChevronDownIcon
                      class="h-4 w-4 ml-1 transition-transform duration-300"
                      :class="{ 'rotate-180': expandedItems[1] }"
                    />
                  </button>

                  <div
                    v-if="expandedItems[1]"
                    class="pt-3 mt-3 border-t border-accent-tertiary/10 animate-expand"
                  >
                    <p class="text-text-secondary text-sm">
                      As Senior Product Designer at DesignLab Interactive, I've been responsible for
                      leading design efforts across multiple enterprise SaaS products. My role
                      involves UX research, prototyping, user testing, and managing a team of
                      designers. We've successfully improved user retention through data-driven
                      design decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Role 2 -->
        <div class="timeline-item md:grid md:grid-cols-2 relative">
          <!-- Left column (odd items) -->
          <div class="timeline-content md:pr-12 animate-on-scroll" data-animation="fade-left">
            <div
              class="bg-background dark:bg-background-alt p-6 rounded-xl border border-accent-tertiary/20 relative career-card"
            >
              <span
                class="timeline-date px-4 py-1 bg-accent-primary text-white text-sm rounded-full absolute top-0 right-6 transform -translate-y-1/2"
                >2019 - 2022</span
              >
              <div class="flex items-start">
                <div class="company-logo mr-4 flex-shrink-0">
                  <div
                    class="w-12 h-12 rounded-lg bg-background-alt/70 dark:bg-background/70 flex items-center justify-center border border-accent-tertiary/30"
                  >
                    <img
                      src="https://picsum.photos/600/400?random=7"
                      alt="TechVision Global"
                      class="w-8 h-8 object-contain"
                      onerror="this.src='/JordiLogo.jpg'; this.classList.add('w-6', 'h-6');"
                    />
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-text-primary mb-1">UX Designer</h3>
                  <h4 class="text-accent-primary mb-3">TechVision Global</h4>
                </div>
              </div>
              <p class="text-accent-tertiary mb-4">
                Designed user interfaces for mobile applications and web platforms with a focus on
                improving user experience.
              </p>
              <div class="space-y-2">
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    Created user experiences for banking apps with 2M+ active users
                  </p>
                </div>
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    Led redesign project that increased conversion rates by 32%
                  </p>
                </div>
                <div class="flex items-start">
                  <CheckIcon class="h-5 w-5 text-accent-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p class="text-text-secondary">
                    Collaborated with development teams to implement pixel-perfect designs
                  </p>
                </div>
              </div>

              <div class="mt-5 pt-4 border-t border-accent-tertiary/20">
                <p class="text-sm text-accent-tertiary mb-2 font-medium">Technologies & Tools</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Sketch</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >InVision</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Adobe XD</span
                  >
                  <span
                    class="px-3 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded-full"
                    >Principle</span
                  >
                </div>
              </div>

              <div class="mt-4 pt-0">
                <button
                  @click="toggleDetails(2)"
                  class="text-sm font-medium text-accent-primary flex items-center hover:text-accent-secondary transition-colors"
                >
                  <span v-if="expandedItems[2]">Hide Details</span>
                  <span v-else>Show Details</span>
                  <ChevronDownIcon
                    class="h-4 w-4 ml-1 transition-transform duration-300"
                    :class="{ 'rotate-180': expandedItems[2] }"
                  />
                </button>

                <div
                  v-if="expandedItems[2]"
                  class="pt-3 mt-3 border-t border-accent-tertiary/10 animate-expand"
                >
                  <p class="text-text-secondary text-sm">
                    As UX Designer at TechVision Global, I was responsible for designing intuitive
                    and engaging user interfaces for various financial and healthcare applications.
                    My focus was on creating accessible and user-friendly experiences that drove
                    business metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Center dot - visible on md+ screens -->
          <div
            class="hidden md:block absolute left-1/2 top-7 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent-primary z-10"
          ></div>

          <!-- Right column (even items) - visible on md+ screens -->
          <div class="hidden md:block"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {
  ClockIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  CheckIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/outline';

// i18n removed - using direct English text

// Track which items are expanded
const expandedItems = ref({});

// Toggle details visibility
const toggleDetails = (id) => {
  expandedItems.value = {
    ...expandedItems.value,
    [id]: !expandedItems.value[id],
  };
};

// Animation on scroll functionality
onMounted(() => {
  // Animate elements on scroll
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

  // Animate counter numbers
  const countElements = document.querySelectorAll('.counter');

  // Create separate observer for counter elements
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target);
          const duration = 2000; // ms
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            let progress = Math.min(elapsedTime / duration, 1);

            // Apply easing function for smoother animation
            progress = easeOutQuad(progress);

            // Calculate current count
            const currentCount = Math.floor(progress * target);
            el.textContent = currentCount + (el.dataset.target.includes('+') ? '+' : '');

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = el.dataset.target;
            }
          };

          requestAnimationFrame(updateCounter);

          // Unobserve after animation
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  countElements.forEach((el) => {
    counterObserver.observe(el);
  });

  // Add animation class to timeline line
  const timelineLine = document.querySelector('.career-timeline .md\\:block.absolute');
  if (timelineLine) {
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timelineLine.classList.add('animate-height');
            timelineObserver.unobserve(timelineLine);
          }
        });
      },
      { threshold: 0.1 },
    );
    timelineObserver.observe(timelineLine);
  }
});

// Easing function for smoother counter animation
function easeOutQuad(t) {
  return t * (2 - t);
}
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

.animate-expand {
  animation: expand 0.3s ease-out forwards;
}

.animate-height {
  animation: growHeight 1.5s ease-out forwards;
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

@keyframes expand {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
  }
}

@keyframes growHeight {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

/* Timeline and card styling */
.timeline-item {
  margin-bottom: 2rem;
}

.timeline-date {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.career-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
}

.career-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

/* Stats card transition */
.stat-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Mobile-specific timeline styling */
@media (max-width: 768px) {
  .timeline-item {
    position: relative;
    padding-left: 2rem;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: rgba(160, 160, 176, 0.3);
  }

  .timeline-item::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 1.5rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent-primary, #a450e1);
  }

  .timeline-content {
    margin-bottom: 2rem;
  }
}
</style>

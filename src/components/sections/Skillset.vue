<template>
  <section
    id="skillset"
    class="py-16 md:py-20 lg:py-24 bg-background-alt/30 dark:bg-background/50 relative overflow-hidden"
  >
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div
        class="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-accent-primary blur-3xl"
      ></div>
      <div
        class="absolute bottom-[15%] right-[5%] w-64 h-64 rounded-full bg-accent-secondary blur-3xl"
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
          My Skillset
        </h2>
        <div class="w-20 h-1 bg-accent-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto text-text-secondary text-lg">
          A web developer with passion for solving complex problems through elegant interfaces
        </p>
      </div>

      <!-- Skills grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <!-- Graphic Design Skill -->
        <div
          class="bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/5 hover:border-accent-primary/20 group"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-accent-primary/10 text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          <!-- Title -->
          <h3
            class="text-xl font-semibold mb-3 text-text-primary transition-colors duration-300 group-hover:text-accent-primary"
          >
            Web Design
          </h3>

          <!-- Description -->
          <p class="text-text-secondary text-base leading-relaxed">
            Creating visual content that communicates messages effectively
          </p>
        </div>

        <!-- Interface Design Skill -->
        <div
          class="bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/5 hover:border-accent-primary/20 group"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 600 } }"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-6 text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <!-- Title -->
          <h3
            class="text-xl font-semibold mb-3 text-text-primary transition-colors duration-300 group-hover:text-accent-primary"
          >
            User Interface
          </h3>

          <!-- Description -->
          <p class="text-text-secondary text-base leading-relaxed">
            Building intuitive interfaces for digital products
          </p>
        </div>

        <!-- User Experience Skill -->
        <div
          class="bg-background-alt/40 dark:bg-background/70 rounded-xl p-8 border border-accent-tertiary/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/5 hover:border-accent-primary/20 group md:col-span-2 lg:col-span-1"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 700, duration: 600 } }"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-6 text-accent-primary transition-all duration-300 group-hover:bg-accent-primary group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
          </div>

          <!-- Title -->
          <h3
            class="text-xl font-semibold mb-3 text-text-primary transition-colors duration-300 group-hover:text-accent-primary"
          >
            User Experience
          </h3>

          <!-- Description -->
          <p class="text-text-secondary text-base leading-relaxed">
            Designing seamless and enjoyable user journeys
          </p>
        </div>
      </div>

      <!-- Additional skills or stats section (optional) -->
      <div
        class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 900, duration: 600 } }"
      >
        <!-- Skill stat 1 -->
        <div
          class="text-center p-5 rounded-lg bg-background-alt/20 dark:bg-background/40 border border-accent-tertiary/10 hover:shadow-accent-primary/5 hover:border-accent-primary/20"
        >
          <div class="text-3xl font-bold text-accent-primary mb-1">
            5+
          </div>
          <div class="text-sm text-text-secondary">
            Years of Experience
          </div>
        </div>

        <!-- Skill stat 2 -->
        <div
          class="text-center p-5 rounded-lg bg-background-alt/20 dark:bg-background/40 border border-accent-tertiary/10 hover:shadow-accent-primary/5 hover:border-accent-primary/20"
        >
          <div class="text-3xl font-bold text-accent-primary mb-1">
            50+
          </div>
          <div class="text-sm text-text-secondary">
            Projects Completed
          </div>
        </div>

        <!-- Skill stat 3 -->
        <div
          class="text-center p-5 rounded-lg bg-background-alt/20 dark:bg-background/40 border border-accent-tertiary/10 hover:shadow-accent-primary/5 hover:border-accent-primary/20"
        >
          <div class="text-3xl font-bold text-accent-primary mb-1">
            20+
          </div>
          <div class="text-sm text-text-secondary">
            Happy Clients
          </div>
        </div>

        <!-- Skill stat 4 -->
        <div
          class="text-center p-5 rounded-lg bg-background-alt/20 dark:bg-background/40 border border-accent-tertiary/10 hover:shadow-accent-primary/5 hover:border-accent-primary/20"
        >
          <div class="text-3xl font-bold text-accent-primary mb-1">
            100%
          </div>
          <div class="text-sm text-text-secondary">
            Satisfaction
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// i18n removed - using direct English text

// Directive for animations (same as Hero component)
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
          }
        });
      }
    }, binding.value?.enter?.transition?.delay || 0);
  },
};
</script>

<style scoped>
.leading-relaxed {
  line-height: 1.6;
}
</style>

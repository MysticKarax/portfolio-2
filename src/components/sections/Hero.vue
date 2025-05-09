<template>
  <section
    id="home"
    class="py-16 md:py-24 lg:py-32 min-h-[90vh] flex items-center relative overflow-hidden"
  >
    <!-- Background elements (optional) -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div
        class="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-accent-primary blur-3xl"
      ></div>
      <div
        class="absolute bottom-[10%] left-[15%] w-80 h-80 rounded-full bg-accent-secondary blur-3xl"
      ></div>
    </div>

    <!-- Main content container -->
    <div class="container mx-auto px-4 z-10 relative">
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <!-- Left column: Text content -->
        <div
          class="w-full lg:w-1/2"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        >
          <!-- Subtitle / Pre-title -->
          <div
            class="inline-block mb-3 px-4 py-1 rounded-full bg-accent-primary/10 text-accent-primary font-medium text-sm md:text-base tracking-wide"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 700 } }"
          >
            {{ $t('sections.hero.subtitle') }}
          </div>

          <!-- Main Title -->
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 leading-tight tracking-tight"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 700 } }"
          >
            {{ $t('sections.hero.title') }}
          </h1>

          <!-- Description -->
          <p
            class="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-8"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 700 } }"
          >
            {{ $t('sections.hero.description') }}
          </p>

          <!-- CTA section -->
          <div
            class="flex flex-wrap gap-4 mt-8"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 700 } }"
          >
            <a
              href="#projects"
              class="px-6 py-3 bg-accent-primary text-white hover:bg-accent-secondary hover:text-white rounded-full transition-colors duration-300 font-medium text-base shadow-lg shadow-accent-primary/20"
            >
              {{ $t('common.view_details') }}
            </a>
            <a
              href="#about"
              class="px-6 py-3 bg-transparent border border-accent-tertiary/30 hover:border-accent-primary text-text-primary hover:text-accent-primary rounded-full transition-colors duration-300 font-medium text-base"
            >
              {{ $t('common.learn_more') }}
            </a>
          </div>
        </div>

        <!-- Right column: Hero image -->
        <div
          class="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 800 } }"
        >
          <div class="relative">
            <!-- Background decoration -->
            <div
              class="absolute -z-10 w-[90%] h-[90%] rounded-full bg-accent-primary/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></div>

            <!-- Hero image with shadow and rounded corners -->
            <img
              src="../../../public/hero-img.png"
              alt="Hero illustration"
              class="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-xl hero-img"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Down arrow indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 0.7, y: 0, transition: { delay: 1500, duration: 700 } }"
    >
      <a
        href="#skillset"
        class="text-accent-tertiary hover:text-accent-primary transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// Initialize i18n
const { t } = useI18n();

// Define the v-motion directive
const vMotion = {
  mounted(el, binding) {
    try {
      // Make sure binding.value exists before accessing its properties
      if (!binding || !binding.value) {
        console.warn('v-motion directive received undefined binding value');
        return;
      }

      // Apply initial styles based on binding value (with safety checks)
      const initialStyles = binding.value.initial || {};
      let transform = [];

      if (initialStyles.opacity !== undefined) {
        el.style.opacity = initialStyles.opacity;
      }

      if (initialStyles.y !== undefined) {
        transform.push(`translateY(${initialStyles.y}px)`);
      }

      if (initialStyles.scale !== undefined) {
        transform.push(`scale(${initialStyles.scale})`);
      }

      if (initialStyles.x !== undefined) {
        transform.push(`translateX(${initialStyles.x}px)`);
      }

      if (transform.length > 0) {
        el.style.transform = transform.join(' ');
      }

      // After a delay, transition to the enter state
      setTimeout(() => {
        // Safety check for enter value
        const enterStyles = binding.value.enter || {};
        const transition = enterStyles.transition || {};

        // Apply transition with fallback values
        el.style.transition = `all ${transition.duration || 500}ms ${transition.ease || 'ease'}`;

        if (enterStyles.opacity !== undefined) {
          el.style.opacity = enterStyles.opacity;
        }

        // Create transform string for enter state
        let enterTransform = [];

        if (enterStyles.y !== undefined) {
          enterTransform.push(`translateY(${enterStyles.y}px)`);
        }

        if (enterStyles.scale !== undefined) {
          enterTransform.push(`scale(${enterStyles.scale})`);
        }

        if (enterStyles.x !== undefined) {
          enterTransform.push(`translateX(${enterStyles.x}px)`);
        }

        if (enterTransform.length > 0) {
          el.style.transform = enterTransform.join(' ');
        }
      }, binding.value.enter?.transition?.delay || 0);
    } catch (error) {
      console.error('Error in v-motion directive:', error);
    }
  },
  // Add unmounted lifecycle hook for cleanup if needed
  unmounted(el) {
    // Any cleanup needed when element is unmounted
    el.style.transition = '';
    el.style.transform = '';
    el.style.opacity = '';
  },
};

// Register the directive with the component
// In Vue 3's script setup, directives are automatically registered with 'v' prefix
// No need for defineDirective - just export the directive object with proper name
const vDir = {
  mounted: vMotion.mounted,
  unmounted: vMotion.unmounted,
};
</script>

<style scoped>
/* Optional additional styling */
.leading-tight {
  line-height: 1.1;
}
.leading-relaxed {
  line-height: 1.6;
}

.hero-img {
  mask-image: linear-gradient(to top, black 80%, transparent);
  /* mask-image: linear-gradient(to bottom, black 80%, transparent); */
}
</style>

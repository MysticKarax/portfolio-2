<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
    @keydown.esc="close"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    ref="modalRef"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-background-alt dark:bg-background opacity-90 backdrop-blur-sm"
      @click="close"
    ></div>

    <!-- Modal Content -->
    <div
      class="relative w-full max-w-md rounded-lg border border-accent-tertiary/10 bg-background-alt dark:bg-background/90 p-6 shadow-xl animate-fade-up"
      :class="{ 'dark:shadow-accent-primary/5': true }"
    >
      <div class="flex flex-col items-center justify-center">
        <!-- Modal Content -->
        <div class="text-center mb-6">
          <h3 class="text-xl font-semibold text-text-primary mb-4">
            {{ title }}
          </h3>
          <p class="text-text-secondary">
            {{ message }}
          </p>
        </div>

        <!-- Action Button -->
        <button
          class="bg-accent-primary text-white hover:bg-accent-primary/90 px-6 py-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
          @click="close"
          ref="acceptButtonRef"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Notification'
  },
  message: {
    type: String,
    default: 'Project Not Available. Try Again Later'
  },
  buttonText: {
    type: String,
    default: 'Accept'
  }
});

const emit = defineEmits(['update:modelValue', 'close']);

const modalRef = ref(null);
const acceptButtonRef = ref(null);
const previouslyFocusedElement = ref(null);

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};

// Handle focus management
watch(() => props.modelValue, async (newValue) => {
  if (newValue) {
    // Store the previously focused element
    previouslyFocusedElement.value = document.activeElement;
    
    // Focus the accept button after the modal is shown
    await nextTick();
    acceptButtonRef.value?.focus();
  } else {
    // Return focus to the previously focused element
    previouslyFocusedElement.value?.focus();
  }
}, { immediate: true });

// Handle ESC key press globally
const handleEscKey = (event) => {
  if (event.key === 'Escape' && props.modelValue) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscKey);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscKey);
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>


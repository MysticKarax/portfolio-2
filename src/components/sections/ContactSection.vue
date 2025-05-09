<template>
  <section id="contact" class="py-20 bg-background-alt">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll" 
            data-animation="fade-up">
          Let's Work Together
        </h2>
        <div class="w-24 h-1 bg-accent-primary mx-auto rounded-full mb-6 animate-on-scroll"
             data-animation="scale-x" 
             data-delay="200"></div>
        <p class="text-lg text-accent-tertiary animate-on-scroll" 
           data-animation="fade-up" 
           data-delay="300">
          Got a project? Let's talk!
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <!-- Contact Information -->
        <div class="animate-on-scroll" data-animation="fade-right" data-delay="400">
          <div class="bg-background p-8 rounded-2xl shadow-md border border-accent-tertiary/20">
            <h3 class="text-2xl font-bold mb-6 text-text-primary">Get in Touch</h3>
            
            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-start">
                <div class="bg-accent-primary/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-medium text-text-primary mb-1">Email Me</h4>
                  <a href="mailto:hello@yourportfolio.com" class="text-accent-primary hover:text-accent-secondary transition-colors">hello@yourportfolio.com</a>
                </div>
              </div>
              
              <!-- Location -->
              <div class="flex items-start">
                <div class="bg-accent-primary/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-medium text-text-primary mb-1">Location</h4>
                  <p class="text-accent-tertiary">Remote / Worldwide</p>
                </div>
              </div>
              
              <!-- Availability -->
              <div class="flex items-start">
                <div class="bg-accent-primary/10 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-medium text-text-primary mb-1">Availability</h4>
                  <p class="text-accent-tertiary">Available for new projects</p>
                </div>
              </div>
            </div>
            
            <!-- Social Media Links -->
            <div class="mt-8">
              <h4 class="text-lg font-medium text-text-primary mb-4">Connect with me</h4>
              <div class="flex space-x-4">
                <a href="#" class="bg-background-alt hover:bg-accent-primary text-accent-primary hover:text-white p-3 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="#" class="bg-background-alt hover:bg-accent-primary text-accent-primary hover:text-white p-3 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" class="bg-background-alt hover:bg-accent-primary text-accent-primary hover:text-white p-3 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162-1.32.27-3.21.967-4.58 2.945a6.817 6.817 0 0 1-2.995-4.927zm6.72 6.721a6.84 6.84 0 0 1-4.146-1.565c.10-.023 1.307-2.188 4.018-3.2 1.09 2.816 1.854 5.132 1.989 5.488a6.816 6.816 0 0 1-1.862-.723zm3.296-1.349c-.091-.261-.814-2.472-1.856-5.215 3.05-.426 5.741.467 6.067.571a6.853 6.853 0 0 1-4.21 4.644z"/>
                  </svg>
                </a>
                <a href="#" class="bg-background-alt hover:bg-accent-primary text-accent-primary hover:text-white p-3 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="animate-on-scroll" data-animation="fade-left" data-delay="500">
          <div class="bg-background p-8 rounded-2xl shadow-md border border-accent-tertiary/20">
            <h3 class="text-2xl font-bold mb-6 text-text-primary">Send a Message</h3>
            
            <form class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-accent-tertiary mb-1">Name</label>
                <input type="text" id="name" name="name" class="w-full px-4 py-3 bg-background-alt border border-accent-tertiary/20 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent outline-none transition" />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-accent-tertiary mb-1">Email Address</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-3 bg-background-alt border border-accent-tertiary/20 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent outline-none transition" />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-accent-tertiary mb-1">Subject</label>
                <input type="text" id="subject" name="subject" class="w-full px-4 py-3 bg-background-alt border border-accent-tertiary/20 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent outline-none transition" />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-accent-tertiary mb-1">Message</label>
                <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 bg-background-alt border border-accent-tertiary/20 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent outline-none transition resize-none"></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  class="w-full bg-accent-primary hover:bg-accent-secondary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-[1.02] shadow-sm"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-20 text-center animate-on-scroll" data-animation="fade-up" data-delay="600">
        <div class="max-w-3xl mx-auto">
          <h3 class="text-2xl md:text-3xl font-bold mb-6">Ready to Start a Project?</h3>
          <p class="text-accent-tertiary mb-8">Let's discuss your ideas and make them reality</p>
          <a 
            href="mailto:hello@yourportfolio.com" 
            class="inline-flex items-center bg-accent-primary hover:bg-accent-secondary text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-md"
          >
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

// i18n removed - using direct English text

// Form data using the composition API
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const formSubmitted = ref(false)
const formError = ref(null)

// Submit form method
const submitForm = () => {
  // This would typically connect to a backend API
  // For now, we'll just simulate a successful submission
  
  formSubmitted.value = true
  
  // Reset form after successful submission
  setTimeout(() => {
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    formSubmitted.value = false
  }, 3000)
}

// Animation on scroll functionality
onMounted(() => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const animation = el.dataset.animation || 'fade-up'
        const delay = el.dataset.delay || 0
        
        setTimeout(() => {
          el.classList.add(`animate-${animation}`)
          el.style.opacity = 1
        }, delay)
        
        // Unobserve after animation
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.1 })
  
  animatedElements.forEach(el => {
    el.style.opacity = 0
    observer.observe(el)
  })
})
</script>

<style scoped>
/* Form focus animations */
input:focus, textarea:focus {
  animation: pulse-border 1.5s ease-in-out;
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
@keyframes pulse-border {
  0% {
    box-shadow: 0 0 0 0 rgba(164, 80, 225, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(164, 80, 225, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(164, 80, 225, 0);
  }
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

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

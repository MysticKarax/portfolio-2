<template>
  <section id="projects" class="py-20 bg-background-alt/30 dark:bg-background/50">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll" 
            data-animation="fade-up">
          {{ $t('sections.projects.title') }}
        </h2>
        <div class="w-24 h-1 bg-accent-primary mx-auto rounded-full mb-6 animate-on-scroll"
             data-animation="scale-x" 
             data-delay="200"></div>
        <p class="text-lg text-accent-tertiary animate-on-scroll" 
           data-animation="fade-up" 
           data-delay="300">
          {{ $t('sections.projects.description') }}
        </p>
      </div>

      <!-- Project Filters -->
      <div class="mb-8 flex flex-wrap justify-center gap-2 animate-on-scroll" data-animation="fade-up" data-delay="200">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="setActiveCategory(category.id)"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
          :class="activeCategory === category.id ? 
            'bg-accent-primary text-white' : 
            'bg-background-alt/50 dark:bg-background-alt text-accent-tertiary hover:text-accent-primary'"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project Card -->
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.id" 
          class="project-card group animate-on-scroll" 
          :data-animation="'fade-up'" 
          :data-delay="100 + (index * 100)"
        >
          <div class="relative overflow-hidden rounded-t-xl">
            <!-- Project Thumbnail -->
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              @load="imageLoaded(project.id)"
              @error="handleImageError(project.id)"
            />
            <!-- Loading state -->
            <div 
              v-if="loadingImages[project.id]" 
              class="absolute inset-0 flex items-center justify-center bg-background-alt/80 dark:bg-background/80"
            >
              <LoadingSpinner class="h-10 w-10 text-accent-primary" />
            </div>
            <!-- Overlay -->
            <div class="absolute inset-0 bg-accent-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
              <p class="text-center mb-4">{{ project.description }}</p>
              <a :href="project.caseStudyUrl" class="px-4 py-2 bg-white text-accent-primary rounded-full text-sm font-medium hover:bg-text-primary transition-colors duration-300">
                {{ $t('sections.projects.view_case') }}
              </a>
            </div>
          </div>
          <div class="p-6 bg-background dark:bg-background-alt rounded-b-xl border border-t-0 border-accent-tertiary/20">
            <h3 class="text-xl font-semibold mb-2 text-text-primary group-hover:text-accent-primary transition-colors duration-300">{{ project.title }}</h3>
            <p class="text-accent-tertiary mb-4 line-clamp-2">{{ project.description }}</p>
            <!-- Technology tags -->
            <div class="flex flex-wrap gap-2 mb-5">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-full"
              >
                {{ tech }}
              </span>
            </div>
            <!-- CTA Button -->
            <a 
              :href="project.caseStudyUrl" 
              class="inline-flex items-center text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors duration-300"
            >
              {{ $t('sections.projects.view_case') }}
              <ArrowRightIcon class="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>

      <!-- View All Projects CTA -->
      <div class="mt-16 text-center animate-on-scroll" data-animation="fade-up" data-delay="700">
        <a 
          href="#" 
          class="inline-flex items-center px-8 py-3 bg-accent-primary hover:bg-accent-secondary text-white rounded-full transition-colors duration-300 font-medium"
        >
          {{ $t('sections.projects.view_all') }}
          <ArrowRightIcon class="h-5 w-5 ml-2" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, ref, computed } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'

// Initialize i18n
const { t } = useI18n()

// Project categories
const categories = ref([
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Design' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'branding', name: 'Branding' },
  { id: 'ui', name: 'UI/UX' }
])

// Active category state
const activeCategory = ref('all')

// Set active category
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
}

// Sample projects data
const projects = ref([
  {
    id: 1,
    title: 'E-commerce App Redesign',
    description: 'A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
    image: 'https://via.placeholder.com/600x400/121212/A450E1?text=Project+1',
    technologies: ['UI Design', 'UX Research', 'Figma'],
    categories: ['web', 'ui'],
    caseStudyUrl: '#case-study/ecommerce'
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    description: 'A comprehensive financial dashboard with intuitive data visualization and real-time analytics.',
    image: 'https://via.placeholder.com/600x400/121212/A450E1?text=Project+2',
    technologies: ['Dashboard Design', 'Data Visualization', 'Sketch'],
    categories: ['web', 'ui'],
    caseStudyUrl: '#case-study/finance'
  },
  {
    id: 3,
    title: 'Health & Fitness App',
    description: 'A mobile app designed to help users track their fitness goals, nutrition, and overall wellness.',
    image: 'https://via.placeholder.com/600x400/121212/A450E1?text=Project+3',
    technologies: ['Mobile UI', 'User Experience', 'Adobe XD'],
    categories: ['mobile', 'ui'],
    caseStudyUrl: '#case-study/fitness'
  },
  {
    id: 4,
    title: 'Smart Home Interface',
    description: 'A smart home control system interface designed for intuitive interaction and accessibility.',
    image: 'https://via.placeholder.com/600x400/121212/A450E1?text=Project+4',
    technologies: ['IoT Design', 'Accessibility', 'Figma'],
    categories: ['ui', 'web'],
    caseStudyUrl: '#case-study/smarthome'
  },
  {
    id: 5,
    title: 'Educational Platform',
    description: 'An online learning platform focused on creating engaging and accessible educational experiences.',
    image: 'https://via.placeholder.com/600x400/121212/A450E1?text=Project+5',
    technologies: ['E-Learning', 'Interaction Design', 'Adobe XD'],
    categories: ['web', 'ui'],
    caseStudyUrl: '#case-study/education'
  },
  {
    id: 6,
    title: 'Travel App Design',
    description: 'A travel planning app designed to help users discover, plan, and share travel experiences.',
    image: 'https://via.placeholder.com/600x400/121212/A450E1?text=Project+6',
    technologies: ['Mobile App', 'UI/UX Design', 'Figma'],
    categories: ['mobile', 'ui'],
    caseStudyUrl: '#case-study/travel'
  }
])

// Loading state management
const loadingImages = ref({})

// Initialize loading states
onMounted(() => {
  // Set initial loading state for all projects
  projects.value.forEach(project => {
    loadingImages.value[project.id] = true
  })
  
  // Animation on scroll setup
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

// Image handling methods
const imageLoaded = (projectId) => {
  loadingImages.value[projectId] = false
}

const handleImageError = (projectId) => {
  loadingImages.value[projectId] = false
  console.error(`Failed to load image for project ${projectId}`)
  // Could set a fallback image here if needed
}

// Filtered projects computation
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => 
    project.categories.includes(activeCategory.value)
  )
})
</script>

<style scoped>
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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


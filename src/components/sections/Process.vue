<template>
  <section id="process" class="py-16 md:py-24 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div
        class="absolute top-[30%] right-[15%] w-80 h-80 rounded-full bg-accent-secondary blur-3xl"
      ></div>
      <div
        class="absolute bottom-[20%] left-[10%] w-72 h-72 rounded-full bg-accent-primary blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section title -->
      <div
        class="text-center mb-16 md:mb-20"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-text-primary mb-4">Process</h2>
        <div class="w-20 h-1 bg-accent-primary mx-auto mb-6"></div>
        <p class="max-w-2xl mx-auto text-text-secondary text-lg">
          My methodical approach ensures every project meets and exceeds expectations
        </p>
      </div>

      <!-- Process steps - Desktop (hidden on mobile) -->
      <div class="hidden md:block">
        <div class="relative">
          <!-- Connection line -->
          <div class="absolute top-[70px] left-[50px] right-[50px] h-1 bg-accent-tertiary/20"></div>

          <!-- Process steps -->
          <div class="grid grid-cols-6 gap-4">
            <!-- Step 1: Pre-Process -->
            <div
              class="relative"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center bg-accent-primary text-white text-xl font-bold mb-3 z-10 shadow-lg shadow-accent-primary/20"
                >
                  1
                </div>
                <div class="text-center">
                  <h3 class="text-lg font-semibold text-text-primary mb-2">Pre-Process</h3>
                  <div
                    class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10 h-full"
                  >
                    <div class="mb-4 text-accent-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <p class="text-sm text-text-secondary">
                      Research, planning, and collecting requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 2: Low Fidelity -->
            <div
              class="relative"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center bg-accent-primary text-white text-xl font-bold mb-3 z-10 shadow-lg shadow-accent-primary/20"
                >
                  2
                </div>
                <div class="text-center">
                  <h3 class="text-lg font-semibold text-text-primary mb-2">Low Fidelity</h3>
                  <div
                    class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10 h-full"
                  >
                    <div class="mb-4 text-accent-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                    <p class="text-sm text-text-secondary">
                      Sketches, wireframes, and initial concepts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 3: Work/Design -->
            <div
              class="relative"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
            >
              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center bg-accent-primary text-white text-xl font-bold mb-3 z-10 shadow-lg shadow-accent-primary/20"
                >
                  3
                </div>
                <div class="text-center">
                  <h3 class="text-lg font-semibold text-text-primary mb-2">Work/Design</h3>
                  <div
                    class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10 h-full"
                  >
                    <div class="mb-4 text-accent-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    </div>
                    <p class="text-sm text-text-secondary">
                      Creating high-fidelity designs and prototypes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 4: Assets & Delivery -->
            <div
              class="relative"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 600 } }"
            >
              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center bg-accent-primary text-white text-xl font-bold mb-3 z-10 shadow-lg shadow-accent-primary/20"
                >
                  4
                </div>
                <div class="text-center">
                  <h3 class="text-lg font-semibold text-text-primary mb-2">Assets & Delivery</h3>
                  <div
                    class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10 h-full"
                  >
                    <div class="mb-4 text-accent-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>
                    </div>
                    <p class="text-sm text-text-secondary">
                      Preparing files and assets for implementation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 5: Final & Test -->
            <div
              class="relative"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 600 } }"
            >
              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center bg-accent-primary text-white text-xl font-bold mb-3 z-10 shadow-lg shadow-accent-primary/20"
                >
                  5
                </div>
                <div class="text-center">
                  <h3 class="text-lg font-semibold text-text-primary mb-2">Final & Test</h3>
                  <div
                    class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10 h-full"
                  >
                    <div class="mb-4 text-accent-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p class="text-sm text-text-secondary">
                      Final revisions, testing, and quality assurance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 6: After Design -->
            <div
              class="relative"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 1200, duration: 600 } }"
            >
              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center bg-accent-primary text-white text-xl font-bold mb-3 z-10 shadow-lg shadow-accent-primary/20"
                >
                  6
                </div>
                <div class="text-center">
                  <h3 class="text-lg font-semibold text-text-primary mb-2">After Design</h3>
                  <div
                    class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10 h-full"
                  >
                    <div class="mb-4 text-accent-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 mx-auto"
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
                    <p class="text-sm text-text-secondary">
                      Support, improvements, and maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Process steps - Mobile (visible only on mobile) -->
      <div class="md:hidden">
        <div class="relative pl-10">
          <!-- Vertical connection line -->
          <div class="absolute top-0 bottom-0 left-4 w-1 bg-accent-tertiary/20"></div>

          <!-- Step 1: Pre-Process -->
          <div
            class="mb-12 relative"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
          >
            <div
              class="absolute top-0 left-[-30px] w-8 h-8 rounded-full flex items-center justify-center bg-accent-primary text-white text-base font-bold z-10 shadow-md shadow-accent-primary/20"
            >
              1
            </div>
            <h3 class="text-lg font-semibold text-text-primary mb-2 ml-4">Pre-Process</h3>
            <div
              class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10"
            >
              <div class="mb-3 text-accent-primary">
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
                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <p class="text-sm text-text-secondary">
                Research, planning, and collecting requirements
              </p>
            </div>
          </div>

          <!-- Step 2: Low Fidelity -->
          <div
            class="mb-12 relative"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
          >
            <div
              class="absolute top-0 left-[-30px] w-8 h-8 rounded-full flex items-center justify-center bg-accent-primary text-white text-base font-bold z-10 shadow-md shadow-accent-primary/20"
            >
              2
            </div>
            <h3 class="text-lg font-semibold text-text-primary mb-2 ml-4">Low Fidelity</h3>
            <div
              class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10"
            >
              <div class="mb-3 text-accent-primary">
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <p class="text-sm text-text-secondary">Sketches, wireframes, and initial concepts</p>
            </div>
          </div>

          <!-- Step 3: Work/Design -->
          <div
            class="mb-12 relative"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
          >
            <div
              class="absolute top-0 left-[-30px] w-8 h-8 rounded-full flex items-center justify-center bg-accent-primary text-white text-base font-bold z-10 shadow-md shadow-accent-primary/20"
            >
              3
            </div>
            <h3 class="text-lg font-semibold text-text-primary mb-2 ml-4">Work/Design</h3>
            <div
              class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10"
            >
              <div class="mb-3 text-accent-primary">
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <p class="text-sm text-text-secondary">
                Creating high-fidelity designs and prototypes
              </p>
            </div>
          </div>

          <!-- Step 4: Assets & Delivery -->
          <div
            class="mb-12 relative"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 800, duration: 600 } }"
          >
            <div
              class="absolute top-0 left-[-30px] w-8 h-8 rounded-full flex items-center justify-center bg-accent-primary text-white text-base font-bold z-10 shadow-md shadow-accent-primary/20"
            >
              4
            </div>
            <h3 class="text-lg font-semibold text-text-primary mb-2 ml-4">Assets & Delivery</h3>
            <div
              class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10"
            >
              <div class="mb-3 text-accent-primary">
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
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <p class="text-sm text-text-secondary">
                Preparing files and assets for implementation
              </p>
            </div>
          </div>

          <!-- Step 5: Final & Test -->
          <div
            class="mb-12 relative"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 1000, duration: 600 } }"
          >
            <div
              class="absolute top-0 left-[-30px] w-8 h-8 rounded-full flex items-center justify-center bg-accent-primary text-white text-base font-bold z-10 shadow-md shadow-accent-primary/20"
            >
              5
            </div>
            <h3 class="text-lg font-semibold text-text-primary mb-2 ml-4">Final & Test</h3>
            <div
              class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10"
            >
              <div class="mb-3 text-accent-primary">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p class="text-sm text-text-secondary">
                Final revisions, testing, and quality assurance
              </p>
            </div>
          </div>

          <!-- Step 6: After Design -->
          <div
            class="relative"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 1200, duration: 600 } }"
          >
            <div
              class="absolute top-0 left-[-30px] w-8 h-8 rounded-full flex items-center justify-center bg-accent-primary text-white text-base font-bold z-10 shadow-md shadow-accent-primary/20"
            >
              6
            </div>
            <h3 class="text-lg font-semibold text-text-primary mb-2 ml-4">After Design</h3>
            <div
              class="bg-background-alt/40 dark:bg-background/70 p-4 rounded-lg border border-accent-tertiary/10"
            >
              <div class="mb-3 text-accent-primary">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p class="text-sm text-text-secondary">Support, improvements, and maintenance</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Process details with cards -->
      <div
        class="mt-20 max-w-4xl mx-auto"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Card 1: My Approach -->
          <div
            class="bg-background-alt/40 dark:bg-background/70 p-6 rounded-xl border border-accent-tertiary/10 shadow-lg"
          >
            <div class="text-accent-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
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
            <h3 class="text-xl font-semibold text-text-primary mb-3">My Approach</h3>
            <p class="text-text-secondary mb-4">
              I apply a structured yet flexible methodology to ensure project success and client
              satisfaction.
            </p>
            <ul class="list-disc pl-5 text-text-secondary space-y-2">
              <li>User-centered approach with iterative feedback loops</li>
              <li>Research-backed design decisions</li>
              <li>Focus on accessibility and inclusivity</li>
              <li>Regular stakeholder engagement and presentations</li>
            </ul>
          </div>

          <!-- Card 2: Collaboration -->
          <div
            class="bg-background-alt/40 dark:bg-background/70 p-6 rounded-xl border border-accent-tertiary/10 shadow-lg"
          >
            <div class="text-accent-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-text-primary mb-3">Collaboration</h3>
            <p class="text-text-secondary mb-4">
              Working closely with clients and team members is essential to delivering outstanding
              results.
            </p>
            <ul class="list-disc pl-5 text-text-secondary space-y-2">
              <li>Transparent communication throughout the project</li>
              <li>Clear project milestones and deliverables</li>
              <li>Cross-functional collaboration with developers</li>
              <li>Effective handoff documentation and specifications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// i18n removed - using direct English text

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
/* Process step styles */
.process-step-desktop {
  transition: all 0.3s ease;
}

.process-step-mobile {
  position: relative;
  transition: all 0.3s ease;
}

/* Animation and layout utilities */
.leading-tight {
  line-height: 1.1;
}
.leading-relaxed {
  line-height: 1.6;
}

/* Icon animations */
.icon-container {
  transition: transform 0.3s ease;
}

.icon-container:hover {
  transform: translateY(-5px);
}

/* Card hover effects */
.process-card {
  transition: all 0.3s ease;
}

.process-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Connection line animations */
@media (min-width: 768px) {
  .process-step:hover .step-connector {
    background-color: var(--accent-primary);
    transition: background-color 0.3s ease;
  }
}

/* Improve readability on mobile */
@media (max-width: 767px) {
  .process-step-mobile p {
    font-size: 0.875rem;
  }
}
</style>

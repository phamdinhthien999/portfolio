<template>
  <article class="portfolio active" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">Portfolio</h2>
    </header>

    <section class="projects">
      <!-- Loading State -->
      <div v-if="loading" class="loading">
        <ion-icon name="sync-outline" class="loading-icon"></ion-icon>
        <span>Đang tải dự án...</span>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error">
        {{ error }}
      </div>

      <template v-else>
        <!-- Filter List -->
        <ul class="filter-list">
          <li v-for="category in categories" :key="category" class="filter-item">
            <button 
              :class="{ active: selectedCategory === category.toLowerCase() }"
              @click="filterProjects(category.toLowerCase())"
            >
              {{ category }}
            </button>
          </li>
        </ul>

        <!-- Projects List -->
        <ul class="project-list">
          <li 
            v-for="project in filteredProjects" 
            :key="project.id" 
            class="project-item active" 
            :data-filter-item="true"
            :data-category="project.category"
            @click="openImageModal(project)"
          >
            <a>
              <figure class="project-img">
                <div 
                  class="project-item-icon-box"
                >
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img 
                  :src="project.image" 
                  :alt="project.title" 
                  loading="lazy"
                >
                <div v-if="project.title" class="project-overlay">
                  <div class="project-title">
                    {{ project.title }}
                  </div>
                </div>
              </figure>
            </a>
          </li>
        </ul>
      </template>
    </section>

    <!-- Image Modal -->
    <ImageModal
      v-if="isModalOpen"
      :is-open="isModalOpen"
      :image-src="selectedImage?.image"
      :image-alt="selectedImage?.title"
      :title="selectedImage?.title"
      :description="selectedImage?.description"
      :can-navigate="filteredProjects.length > 1"
      @close="closeImageModal"
      @previous="showPreviousImage"
      @next="showNextImage"
    />
  </article>
</template>

<script setup>
import { ref, computed, defineAsyncComponent, inject, toRefs } from 'vue'
const ImageModal = defineAsyncComponent(() => import('./ImageModal.vue'))

const projectData = inject('projectData')
const { loading, error, data: projectsData } = toRefs(projectData)
const projects = computed(() => projectsData.value || [])

const categories = computed(() => {
  if (!projectsData.value) return ['All'];
  
  // Lấy unique categories từ projects
  const uniqueCategories = [...new Set(
    projectsData.value.map(project => project.category)
  )];
  
  // Thêm 'All' vào đầu danh sách và capitalize
  return ['All', ...uniqueCategories].map(cat => 
    cat.charAt(0).toUpperCase() + cat.slice(1)
  );
});

const selectedCategory = ref('all')
// Modal state
const isModalOpen = ref(false)
const selectedImage = ref(null)

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return projects.value
  return projects.value.filter(project => 
    project.category.toLowerCase() === selectedCategory.value
  )
})

const filterProjects = (category) => {
  selectedCategory.value = category
}

// Modal methods
const openImageModal = (project) => {
  selectedImage.value = project
  isModalOpen.value = true
}

const closeImageModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedImage.value = null
  }, 300)
}

const showPreviousImage = () => {
  const currentIndex = filteredProjects.value.findIndex(p => p.id === selectedImage.value.id)
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.value.length - 1
  selectedImage.value = filteredProjects.value[prevIndex]
}

const showNextImage = () => {
  const currentIndex = filteredProjects.value.findIndex(p => p.id === selectedImage.value.id)
  const nextIndex = currentIndex < filteredProjects.value.length - 1 ? currentIndex + 1 : 0
  selectedImage.value = filteredProjects.value[nextIndex]
}

</script>

<style scoped>
.project-item-icon-box {
  cursor: pointer;
  z-index: 2;
}

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
  color: var(--vegas-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.loading-icon {
  font-size: 1.5rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.error {
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
  color: #dc3545;
}

.project-img {
  position: relative;
  overflow: hidden;
}

.project-overlay {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 60px 20px 20px;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
  display: flex;
  align-items: flex-end;
  opacity: 0;
  transition: opacity 0.3s ease; 
  cursor: pointer;
}

.project-img:hover .project-overlay {
  opacity: 1;
}

.project-title {
  color: white;
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.4;
  width: 100%;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
</style>

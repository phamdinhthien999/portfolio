<template>
  <transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="close" @keydown.esc="close">
      <div class="modal-content">
        <button class="modal-close-btn" @click="close">
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="modal-container">
          <div class="modal-image-wrapper">
            <!-- Navigation buttons -->
            <button 
              v-if="canNavigate"
              class="modal-nav-btn modal-prev-btn" 
              @click="$emit('previous')"
            >
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>

            <button 
              v-if="canNavigate"
              class="modal-nav-btn modal-next-btn" 
              @click="$emit('next')"
            >
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>

            <img 
              :src="imageSrc" 
              :alt="imageAlt"
              class="modal-image"
              @error="handleImageError"
            >
          </div>

          <div class="modal-info">
            <h3 class="modal-title" v-if="title">{{ title }}</h3>
            <p class="modal-description" v-if="description">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: 'Project image'
  },
  canNavigate: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close', 'previous', 'next'])

const close = () => {
  emit('close')
}

const handleImageError = (e) => {
  console.error('Failed to load image:', e)
  // Could add fallback image here
}

const handleEscKey = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscKey)
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: transparent;
}

.modal-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  background: var(--eerie-black-1);
  border-radius: 14px;
  overflow: hidden;
}

.modal-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.modal-image {
  display: block;
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
}

.modal-info {
  padding: 20px;
  color: var(--white);
}

.modal-title {
  font-size: 20px;
  margin-bottom: 16px;
  color: var(--vegas-gold);
}

.modal-description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--light-gray);
}

ion-icon.md.hydrated {
  font-size: 20px;
}

@media (max-width: 850px) {
  .modal-container {
    grid-template-columns: 1fr;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-title {
    font-size: 16px;
  }
  
  .modal-description {
    font-size: 14px;
  }

  .modal-overlay {
    align-items: initial;
    padding: 0px;
    padding-top: 48px;
  }

  .modal-image {
    max-height: 65vh;
  }

  .modal-info {
    padding: 12px;
    padding-top: 0px;
  }

  .modal-close-btn {
    background: var(--onyx);
  }
  
  ion-icon.md.hydrated {
    font-size: 16px;
  }
}

.modal-close-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.3s;
  z-index: 1;
}

.modal-close-btn:hover {
  opacity: 1;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.modal-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.3s ease;
  z-index: 1;
  font-size: 1.5em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.modal-prev-btn {
  left: 10px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
}

.modal-next-btn {
  right: 10px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
}

.modal-nav-btn:hover {
  opacity: 1;
  transform: translateY(-50%) scale(1.1);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

.modal-next-btn:hover {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

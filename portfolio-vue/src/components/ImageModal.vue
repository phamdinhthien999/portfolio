<template>
  <transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="close" @keydown.esc="close">
      <div class="modal-content">
        <button class="modal-close-btn" @click="close">
          <ion-icon name="close-outline"></ion-icon>
        </button>

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
  display: flex;
  align-items: center;
}

.modal-image-wrapper {
  background: var(--eerie-black-1);
  border-radius: 14px;
  overflow: hidden;
  position: relative;
}

.modal-image {
  display: block;
  /* max-width: calc(90vw - 40px); */
  max-height: 90vh;
  object-fit: contain;
}

.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--onyx);
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
  left: 20px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
}

.modal-next-btn {
  right: 20px;
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

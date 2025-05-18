<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li v-for="item in navItems" :key="item.path" class="navbar-item">
        <button 
          class="navbar-link" 
          :class="{ active: currentPath === item.path }"
          @click="navigate(item.path)"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const currentPath = ref('')

const navItems = ref([
  { name: 'About', path: '/about' },
  // { name: 'Resume', path: '/resume' },
  { name: 'Portfolio', path: '/portfolio' },
  // { name: 'Blog', path: '/blog' },
  // { name: 'Contact', path: '/contact' }
])

const navigate = (path) => {
  router.push(path)
}

onMounted(() => {
  currentPath.value = route.path
})

watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath
  }
)
</script>

<style scoped>
/* Các styles đặc thù cho component này sẽ được đặt ở đây nếu cần */
</style>

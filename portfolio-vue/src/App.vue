<template>
  <main>
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </main>
</template>

<script setup>
import { onMounted, provide, reactive } from 'vue'
import axios from 'axios'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

const API_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgVsczzZQj0IlXpuyCoJaA15TQBwQKjyZ2P5wUSkiSOubw7TzZzPrVc7ploA8SXyuqv7_yild-4ARqg4tCmPuMi-Ald3pY8Gi1zaHM2EL9bUXEzuP22eRe-BzeAB64K3aQ6_FHvvrpMqFGlmprg0x-gYZ62oCDAeUTzggOgHhULeBksyfEVbVLHClyLZ0aspDcyufyEUKEClOEnFlRjrPAWnYvtEwBWDbpbHevJS_YXgTEbxNhsRtIC9INiWFBbZc9MQGbqCjdLG0FTZleZFx4jJmvR_t05R2yeoXuPM-b-VIN3sNPjni28pFlnzg&lib=MJLJQgNbzyDoxVUyuJgAgEjJOzZw8k3LO'

const extractGoogleDriveId = (url) => {
  // Kiểm tra nếu là Google Drive URL
  if (url.includes('drive.google.com')) {
    const match = url.match(/\/d\/(.+?)(?:\/|$|\?)/);
    return match ? match[1] : null;
  }
  return null;
}

const formatImageUrl = (url) => {
  const driveId = extractGoogleDriveId(url);
  if (driveId) {
    return `https://lh3.googleusercontent.com/d/${driveId}`;
  }
  return url;
}

const projectData = reactive({
  data: null,
  loading: true,
  error: null
})

// Provide reactive state for child components
provide('projectData', projectData)

onMounted(async () => {
  // Load Ionicons
  const ioniconsModule = document.createElement('script')
  ioniconsModule.type = 'module'
  ioniconsModule.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
  
  const ioniconsNoModule = document.createElement('script')
  ioniconsNoModule.noModule = true
  ioniconsNoModule.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
  
  document.body.appendChild(ioniconsModule)
  document.body.appendChild(ioniconsNoModule)

  // Fetch project data
  try {
    const response = await axios.get(API_URL)
    projectData.data = response.data.data.map(item => ({
      id: item.ID,
      title: item.Title || '',
      category: item.Category?.toLowerCase() || 'uncategorized',
      image: formatImageUrl(item.Image) || '',
      description: item.Description || '',
      link: '#'
    }))
  } catch (err) {
    console.error('Error fetching projects:', err)
    projectData.error = 'Không thể tải dữ liệu dự án. Vui lòng thử lại sau.'
  } finally {
    projectData.loading = false
  }
})
</script>

<style>
@import './assets/css/style.css';
</style>

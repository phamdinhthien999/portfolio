import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Import components
import AboutSection from './components/AboutSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'

// Router configuration
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      component: AboutSection
    },
    {
      path: '/portfolio',
      component: PortfolioSection
    }
  ]
})

// Create Vue app
const app = createApp(App)

// Use router
app.use(router)

// Mount app
app.mount('#app')

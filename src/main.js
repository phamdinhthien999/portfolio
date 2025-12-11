import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import * as Sentry from "@sentry/vue";

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

Sentry.init({
  app,
  dsn: "https://92e885b1968027062385aa48ce130505@o4510516558102528.ingest.de.sentry.io/4510516637925456",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

// Use router
app.use(router)

// Mount app
app.mount('#app')

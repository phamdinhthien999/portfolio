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

Sentry.init({
  app,
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [Sentry.browserTracingIntegration()],
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

// Use router
app.use(router)

// Mount app
app.mount('#app')

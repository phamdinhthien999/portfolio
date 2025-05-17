<template>
  <article class="about active" data-page="about">
    <!-- Header -->
    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>

    <!-- About Text -->
    <section class="about-text">
      <p>{{ aboutText.intro }}</p>
      <p>{{ aboutText.description }}</p>
    </section>

    <!-- Services -->
    <section class="service">
      <h3 class="h3 service-title">What i'm doing</h3>

      <ul class="service-list">
        <li v-for="service in services" :key="service.title" class="service-item">
          <div class="service-icon-box">
            <img :src="service.icon" :alt="service.title" width="40">
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">{{ service.title }}</h4>
            <p class="service-item-text">{{ service.description }}</p>
          </div>
        </li>
      </ul>
    </section>
 
    <!-- Clients -->
    <section class="clients">
      <h3 class="h3 clients-title">Clients</h3>

      <ul class="clients-list has-scrollbar">
        <li v-for="client in clients" :key="client.id" class="clients-item">
          <a href="#">
            <img :src="client.logo" :alt="client.name">
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const aboutText = ref({
  intro: "I am a designer specializing in UI/UX design, with 4 years of experience in the field. Throughout my career, I have had the opportunity to work in the fintech, edtech,etc. industries. I have gained valuable experience working in both product companies and outsourcing companies. With my knowledge and experience, I have a deep understanding of how to optimize user experiences. I believe that UI/UX design is the key to connecting users with the product.",
  description: ""
})

const services = ref([
  {
    icon: '/assets/images/icon-design.svg',
    title: 'Web design',
    description: 'The most modern and high-quality design made at a professional level.'
  },
  {
    icon: '/assets/images/icon-app.svg',
    title: 'Mobile apps',
    description: 'Professional development of applications for iOS and Android.'
  }
])

const testimonials = ref([
  {
    id: 1,
    name: 'Daniel lewis',
    avatar: '/assets/images/avatar-1.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.',
    date: '2021-06-14'
  },
  {
    id: 2,
    name: 'Jessica miller',
    avatar: '/assets/images/avatar-2.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.',
    date: '2021-06-14'
  },
  {
    id: 3,
    name: 'Emily evans',
    avatar: '/assets/images/avatar-3.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.',
    date: '2021-06-14'
  },
  {
    id: 4,
    name: 'Henry william',
    avatar: '/assets/images/avatar-4.png',
    text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.',
    date: '2021-06-14'
  }
])

const clients = ref([
  { id: 1, name: 'Client 1', logo: '/assets/images/logo-1-color.png' },
  { id: 2, name: 'Client 2', logo: '/assets/images/logo-2-color.png' },
  { id: 3, name: 'Client 3', logo: '/assets/images/logo-3-color.png' },
  { id: 4, name: 'Client 4', logo: '/assets/images/logo-4-color.png' },
  { id: 5, name: 'Client 5', logo: '/assets/images/logo-5-color.png' },
  { id: 6, name: 'Client 6', logo: '/assets/images/logo-6-color.png' }
])

const isModalOpen = ref(false)
const selectedTestimonial = ref(null)

const openTestimonialModal = (testimonial) => {
  selectedTestimonial.value = testimonial
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedTestimonial.value = null
  }, 300)
}
</script>

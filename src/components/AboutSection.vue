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
 
    <!-- Experience Timeline -->
    <section class="timeline">
      <h3 class="h3 service-title">Work Experience</h3>
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>
        <h3 class="h3">Experience</h3>
      </div>

      <ol class="timeline-list">
        <li v-for="exp in experience" :key="exp.id" class="timeline-item">
          <h4 class="h4 timeline-item-title">{{ exp.role }} - {{ exp.company }}</h4>
          <span>{{ exp.period }}</span>
          <p class="timeline-text">{{ exp.description }}</p>
        </li>
      </ol>
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

const experience = ref([
  {
    id: 1,
    role: 'UI/UX Designer',
    company: 'Lotte Innovate Vietnam',
    period: '07/2023 - Now',
    description: 'Participated in the role of UI/UX designer in projects providing digital solutions for clients (Website/Mobile Apps): Lotte World Aquarium Hanoi Homepage; Lotte Mall West Lake Hanoi Homepage; Smart Farm System (HMI, Web System, App Mobile); SaaS Portal; etc.'
  },
  {
    id: 2,
    role: 'UI/UX Freelancer',
    company: 'SellerSmith - BraveBits Vietnam',
    period: '12/2022 - 07/2023',
    description: 'Participated as a designer for website templates on PageFly – a Shopify App that provides website templates across various industries, helping users design their personal or business websites.'
  },
  {
    id: 3,
    role: 'UI/UX Designer',
    company: 'HOCMAI.VN - Galaxy Education',
    period: '11/2021 - 06/2023',
    description: 'Participated in research, ideation, and design of website/mobile app products in the education technology sector, including:\n- Online education apps (HOCMAI, HOCMAI Primary);\n- Online learning websites (HOCMAI.VN; HSA, TSA, IELTS competency assessments);\n- Education management systems (HOCMAI CMS, HOCMAI EMS, Loyalty).'
  },
  {
    id: 4,
    role: 'UI/UX Designer',
    company: 'VNPT Fintech - VNPT-Media',
    period: '05/2021 - 11/2021',
    description: 'Participated in designing services for the VNPT Money e-wallet and VNPTPay Merchant'
  }
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

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">Resume</h2>
    </header>

    <!-- Experience Timeline -->
    <section class="timeline">
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

    <!-- Education Timeline -->
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>
        <h3 class="h3">Education</h3>
      </div>

      <ol class="timeline-list">
        <li v-for="edu in education" :key="edu.id" class="timeline-item">
          <h4 class="h4 timeline-item-title">{{ edu.school }}</h4>
          <span>{{ edu.period }}</span>
          <p class="timeline-text">{{ edu.description }}</p>
        </li>
      </ol>
    </section>

    <!-- Skills -->
    <!-- <section class="skill">
      <h3 class="h3 skills-title">My skills</h3>

      <ul class="skills-list content-card">
        <li v-for="skill in skills" :key="skill.name" class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">{{ skill.name }}</h5>
            <data :value="skill.value">{{ skill.value }}%</data>
          </div>

          <div class="skill-progress-bg">
            <div 
              class="skill-progress-fill" 
              :style="{ width: skill.value + '%' }"
            ></div>
          </div>
        </li>
      </ul>
    </section> -->
  </article>
</template>

<script setup>
import { ref } from 'vue'

const education = ref([
  {
    id: 1,
    school: 'Posts and Telecommunications Institute of Technology',
    period: '2017 — 2023',
    description: 'Bachelor of Engineering in Multimedia Design and Technology'
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

const skills = ref([
  { name: 'Web design', value: 80 },
  { name: 'Graphic design', value: 70 },
  { name: 'Branding', value: 90 },
  { name: 'WordPress', value: 50 }
])
</script>

<template>
  <aside class="sidebar" :class="{ active: isExpanded }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/assets/images/my-avatar.png" alt="Thanh Xuan" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Thanh Xuan">{{ personalInfo.name }}</h1>
        <p class="title">{{ personalInfo.title }}</p>
      </div>

      <button class="info_more-btn" @click="toggleSidebar">
        <ion-icon :name="isExpanded ? 'chevron-up-outline' : 'chevron-down-outline'"></ion-icon>
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li v-for="(contact, index) in contacts" :key="index" class="contact-item">
          <div class="icon-box">
            <ion-icon :name="contact.icon"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">{{ contact.title }}</p>
            
            <component 
              :is="contact.type === 'link' ? 'a' : 'div'" 
              :href="contact.href" 
              class="contact-link"
            >
              {{ contact.value }}
            </component>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <li v-for="(social, index) in socials" :key="index" class="social-item">
          <a :href="social.link" class="social-link" target="_blank" rel="noopener noreferrer">
            <img :src="social.icon" alt="social icon">
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(true)

const personalInfo = ref({
  name: 'Thanh Xuan',
  title: 'UI/UX Designer'
})

const contacts = ref([
  {
    icon: 'mail-outline',
    title: 'Email',
    value: 'thanhxuanfr2208@gmail.com',
    type: 'link',
    href: 'mailto:thanhxuanfr2208@gmail.com'
  },
  {
    icon: 'phone-portrait-outline',
    title: 'Phone',
    value: '0392-342-999',
    type: 'link',
    href: 'tel:+84392342999'
  },
  {
    icon: 'location-outline',
    title: 'Location',
    value: 'Ha Noi, Vietnam',
    type: 'text'
  }
])

const socials = ref([
  {
    icon: '/assets/images/social/db.svg',
    link: 'https://dribbble.com/thanhxuan24'
  },
  {
    icon: '/assets/images/social/linkedin.svg',
    link: 'https://www.linkedin.com/in/thanhxuanuiux/'
  },
  {
    icon: '/assets/images/social/gmail.svg',
    link: 'mailto:thanhxuanfr2208@gmail.com'
  },
  {
    icon: '/assets/images/social/fb.svg',
    link: 'https://www.facebook.com/forelsket.g'
  }
])

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value
}
</script>

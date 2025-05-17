<template>
  <article class="contact active" data-page="contact">
    <header>
      <h2 class="h2 article-title">Contact</h2>
    </header>

    <!-- Map -->
    <section class="mapbox" data-mapbox>
      <figure>
        <!-- <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
          width="400" 
          height="300" 
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> -->
      </figure>
    </section>

    <!-- Contact Form -->
    <section class="contact-form">
      <h3 class="h3 form-title">Contact Form</h3>

      <form class="form" @submit.prevent="handleSubmit" ref="form">
        <div class="input-wrapper">
          <input 
            type="text" 
            name="fullname" 
            class="form-input" 
            placeholder="Full name" 
            required 
            v-model="formData.fullname"
            @input="validateForm"
          >

          <input 
            type="email" 
            name="email" 
            class="form-input" 
            placeholder="Email address" 
            required
            v-model="formData.email"
            @input="validateForm"
          >
        </div>

        <textarea 
          name="message" 
          class="form-input" 
          placeholder="Your Message" 
          required
          v-model="formData.message"
          @input="validateForm"
        ></textarea>

        <button 
          class="form-btn" 
          type="submit" 
          :disabled="!isFormValid"
        >
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  fullname: '',
  email: '',
  message: ''
})

const isFormValid = ref(false)
const form = ref(null)

const validateForm = () => {
  isFormValid.value = form.value?.checkValidity() || false
}

const handleSubmit = async () => {
  if (!isFormValid.value) return

  try {
    // Trong thực tế, thay thế bằng API call
    console.log('Form submitted:', formData)
    
    // Reset form sau khi gửi thành công
    formData.fullname = ''
    formData.email = ''
    formData.message = ''
    isFormValid.value = false
    
    alert('Message sent successfully!')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Failed to send message. Please try again.')
  }
}
</script>

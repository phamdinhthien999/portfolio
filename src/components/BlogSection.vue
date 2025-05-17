<template>
  <article class="blog active" data-page="blog">
    <header>
      <h2 class="h2 article-title">Blog</h2>
    </header>

    <section class="blog-posts">
      <ul class="blog-posts-list">
        <li 
          v-for="post in blogPosts" 
          :key="post.id" 
          class="blog-post-item"
        >
          <a :href="post.link">
            <figure class="blog-banner-box">
              <img 
                :src="post.image" 
                :alt="post.title" 
                loading="lazy"
              >
            </figure>

            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">{{ post.category }}</p>
                <span class="dot"></span>
                <time :datetime="post.date">{{ post.formattedDate }}</time>
              </div>

              <h3 class="h3 blog-item-title">{{ post.title }}</h3>
              <p class="blog-text">{{ post.excerpt }}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { month: 'short', day: 'numeric', year: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

const blogPosts = ref([
  {
    id: 1,
    title: 'Design conferences in 2022',
    category: 'Design',
    date: '2022-02-23',
    image: '/assets/images/blog-1.jpg',
    excerpt: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    link: '#',
    get formattedDate() {
      return formatDate(this.date)
    }
  },
  {
    id: 2,
    title: 'Best fonts every designer',
    category: 'Design',
    date: '2022-02-23',
    image: '/assets/images/blog-2.jpg',
    excerpt: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
    link: '#',
    get formattedDate() {
      return formatDate(this.date)
    }
  },
  {
    id: 3,
    title: 'Design digest #80',
    category: 'Design',
    date: '2022-02-23',
    image: '/assets/images/blog-3.jpg',
    excerpt: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
    link: '#',
    get formattedDate() {
      return formatDate(this.date)
    }
  },
  {
    id: 4,
    title: 'UI interactions of the week',
    category: 'Design',
    date: '2022-02-23',
    image: '/assets/images/blog-4.jpg',
    excerpt: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.',
    link: '#',
    get formattedDate() {
      return formatDate(this.date)
    }
  },
  {
    id: 5,
    title: 'The forgotten art of spacing',
    category: 'Design',
    date: '2022-02-23',
    image: '/assets/images/blog-5.jpg',
    excerpt: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
    get formattedDate() {
      return formatDate(this.date)
    }
  },
  {
    id: 6,
    title: 'Design digest #79',
    category: 'Design',
    date: '2022-02-23',
    image: '/assets/images/blog-6.jpg',
    excerpt: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
    link: '#',
    get formattedDate() {
      return formatDate(this.date)
    }
  }
])
</script>

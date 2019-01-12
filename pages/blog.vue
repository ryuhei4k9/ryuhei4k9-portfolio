<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <section class="section">
        <div class="container">
          <h1 class="title">{{ post.title }}</h1>
          <h2 class="subtitle">{{ post.createdAt }}</h2>
          <div class="content">{{ post.content }}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import posts from '~/apollo/queries/posts'

export default {
  head: {
    title: 'Blog'
  },
  name: 'posts',
  data () {
    return {
      posts: {}
    }
  },
  apollo: {
    posts: {
      query: posts
    }
  }
}
</script>
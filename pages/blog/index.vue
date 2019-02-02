<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <section class="section">
        <div class="container">
          <h1 class="title"><nuxt-link :to="`/blog/${ post.slug }`">{{ post.title }}</nuxt-link></h1>
          <h2 class="subtitle">{{ $date_format(post.createdAt, "YYYY/MM/DD hh:mm:ss") }}</h2>
          <!-- <div class="content" v-html="$md.render(post.content)"></div> -->
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
  data () {
    return {
      posts: {}
    }
  },
  apollo: {
    posts: {
      query: posts,
      prefetch: true
    }
  }
}
</script>
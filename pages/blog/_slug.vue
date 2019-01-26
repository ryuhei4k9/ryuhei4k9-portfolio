<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ post.title }}</h1>
      <h2 class="subtitle">{{ $date_format(post.createdAt, "YYYY/MM/DD hh:mm:ss") }}</h2>
      <div class="content" v-html="$md.render(post.content || '')"></div>
    </div>
  </section>
</template>

<script>
import post from '~/apollo/queries/post'

export default {
  head: {
    title: 'Blog'
  },
  data () {
    return {
      post: {}
    }
  },
  apollo: {
    post: {
      query: post,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  }
}
</script>
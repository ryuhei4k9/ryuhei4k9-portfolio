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
export default {
  head: {
    title: 'Blog'
  },
  async asyncData({ route, app, store, payload }) {
    if (payload) {
      const post = payload
      return { post: post }
    }
  }
}
</script>
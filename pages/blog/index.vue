<template>
  <div>
    {{ status }}
    <posts/>
  </div>
</template>

<script>
import Posts from '~/components/Posts'
import axios from 'axios'

export default {
  head: {
    title: 'Blog'
  },
  data () {
    return {
      status: '',
      prefecture: '',
      city: '',
      town: ''
    }
  },
  async asyncData ({}) {
    const response = await axios.get('http://zipcloud.ibsnet.co.jp/api/search?zipcode=1040032')
    return { status: response.data.status }
  },
  components: {
    Posts
  }
}
</script>
<template>
  <fragment>
    <div v-if="error">Failed to fetch data from Riffy Blog</div>
    <div v-else-if="loading">Loading...</div>
    <card v-for="blog in blogs" :key="blog.title" :title="blog.title" :subtitle="blog.subtitle" :url="blog.url" />
  </fragment>
</template>

<script lang="ts">
  import Vue from 'vue'
  import card from './card/index.vue'

  import { IAPIResult } from "../@types/IAPIResult"
  import { IBlog } from "../@types/IBlog"

  let data = {
    blogs: [],
    error: false,
    loading: true,
  }

  try {
    // Get data from Riffy Blog
    fetch('https://blog.rayriffy.com/api/author/rayriffy/1.json')
      .then(async o => await o.json())
      .then((res: IAPIResult<IBlog[]>) => {
        data.blogs = res.data
      })
      .catch(e => {
        throw e
      })
  } catch {
    data.error = true
  } finally {
    data.loading = false
  }

  export default Vue.extend({
    data: () => data,
    components: {
      card,
    },
  })
</script>

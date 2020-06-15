<template>
  <fragment>
    <card v-for="link in links" :key="link.title" :title="link.title" :subtitle="link.subtitle" :url="link.url" />
  </fragment>
</template>

<script lang="ts">
  import Vue from 'vue'

  import card from './card/index.vue'

  export default Vue.extend({
    data: () => ({
      links: [
        {
          title: 'Riffy Blog',
          subtitle: 'The Nerdy Blogger',
          url: 'https://blog.rayriffy.com',
        },
        {
          title: 'Curriculum Vitae',
          subtitle: 'My curriculum vitae built with TypeScript',
          url: 'https://cv.rayriffy.com',
        },
      ],
    }),
    components: {
      card,
    },
  })
</script>

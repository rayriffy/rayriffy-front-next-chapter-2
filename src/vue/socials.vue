<template>
  <fragment>
    <card v-for="social in socials" :key="social.title" :title="social.title" :subtitle="social.subtitle" :url="social.url" />
  </fragment>
</template>

<script lang="ts">
  import Vue from 'vue'

  import card from './card/index.vue'

  export default Vue.extend({
    data: () => ({
      socials: [
        {
          title: 'Facebook',
          subtitle: 'fb.me/rayriffy',
          url: 'https://fb.me/rayriffy',
        },
        {
          title: 'Twitter',
          subtitle: '@rayriffy',
          url: 'https://twitter.com/rayriffy',
        },
        {
          title: 'GitHub',
          subtitle: 'github.com/rayriffy',
          url: 'https://github.com/rayriffy',
        },
      ]
    }),
    components: {
      card,
    },
  })
</script>

<template>
  <div id="app">
    <div class="mt-4 bg-white dark:bg-gray-800 rounded-lg overflow-hidden hidden" id="encore-1"></div>
    <div class="pt-4 flex flex-wrap">
      <div class="w-full md:w-1/2 py-4 md:pr-4">
        <section class="bg-white dark:bg-gray-800 rounded-lg p-6">
          <div class="text-2xl font-semibold pb-2 uppercase">Links</div>
          <card v-for="link in links" :key="link.title" :title="link.title" :subtitle="link.subtitle" :url="link.url" />
        </section>
        <section class="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6">
          <div class="text-2xl font-semibold pb-2 uppercase">Socials</div>
          <card v-for="social in socials" :key="social.title" :title="social.title" :subtitle="social.subtitle" :url="social.url" />
        </section>
      </div>
      <div class="w-full md:w-1/2 py-4 md:pl-4">
        <section class="bg-white dark:bg-gray-800 rounded-lg p-6">
          <div class="text-2xl font-semibold pb-2 uppercase">Blogs</div>
          <blog />
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  import blog from './components/blog.vue'
  import card from './components/card/index.vue'

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
      blog,
      card,
    },
  })
</script>

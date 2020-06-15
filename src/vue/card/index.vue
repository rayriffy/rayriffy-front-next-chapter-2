<template>
  <div class="py-2">
    <fragment v-if="url === undefined">
      <card-content :title="title" :subtitle="subtitle" />
    </fragment>
    <fragment v-else>
      <a :href="url">
        <card-content :title="title" :subtitle="subtitle" />
      </a>
    </fragment>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import cardContent from './content.vue'

  export default Vue.extend({
    props: {
      title: {
        type: String,
        required: true,
        default: '',
      },
      subtitle: {
        type: String,
        required: true,
        default: '',
      },
      url: {
        type: String,
        required: false,
        default: undefined,
      },
    },
    components: {
      cardContent,
    },
  })
</script>

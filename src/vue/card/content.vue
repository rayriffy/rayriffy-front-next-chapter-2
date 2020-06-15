<template>
  <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-md group">
    <div class="text-xl font-semibold group-hover:underline">{{ title }}</div>
    <div class="text-gray-700 dark:text-gray-300">{{ subtitle }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
  },
})
</script>

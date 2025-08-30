<template>
  <article class="article">
    <h3>{{ props.title }}</h3>
    <p>{{ props.text }}</p>
  </article>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: "No text provided",
  },
});
</script>
<style scoped>
.article {
  padding: 2rem;
}
</style>

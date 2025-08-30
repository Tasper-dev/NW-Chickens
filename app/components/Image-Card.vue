<template>
  <div class="card image-card">
    <img
      class="card-img-top"
      :class="{ 'border border-2 border-dark': showBorder }"
      @click="clickBorder"
      :src="props.imageSrc"
      :alt="props.alt"
    />
    <div class="card-body">
      <h5 class="card-title">{{ props.title }}</h5>
      <p class="card-text">{{ props.cardText }}</p>
      <NuxtLink :to="props.url" class="btn btn-success">{{
        props.linkText
      }}</NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { toggleBorder } from "/composable/toggleBorder.js";
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "image",
  },
  title: String,
  cardText: String,
  url: String,
  linkText: String,
});

const { showBorder, clickBorder } = toggleBorder();
</script>
<style scoped></style>

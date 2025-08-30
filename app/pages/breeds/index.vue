<template>
  <section class="container my-3">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <!-- // Image Card Component used with a V-for loop // -->
      <ImageCard
        v-for="(breed, index) in breedsList"
        :key="index"
        :imageSrc="breed.imgSrc"
        :alt="breed.altText"
        :title="breed.title"
        :cardText="breed.cardText"
        :url="breed.url"
        :linkText="breed.linkText"
      ></ImageCard>
    </div>
  </section>
</template>
<script setup>
import ImageCard from "/components/Image-Card.vue";

import { ref } from "vue";
import breedsList from "@/assets/breedsList.js";
</script>
<style></style>

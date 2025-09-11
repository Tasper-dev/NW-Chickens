<template>
  <Header>
    <template #subheader>
      <h2>Breeds A-Z</h2>
    </template>
  </Header>
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
import { ref } from "vue";
import ImageCard from "/components/Image-Card.vue";
import breedsList from "@/assets/breedsList.js";

useHead({
  title: "NWC | Breeds",
  meta: [
    {
      name: "description",
      content:
        "Explore a variety of chicken breeds, each with unique characteristics and traits. Find the perfect breed for your backyard flock.",
    },
  ],
});
</script>
<style></style>

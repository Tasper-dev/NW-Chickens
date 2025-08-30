<template>
  <section class="container my-3">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <!-- // Image Card Component used with a V-for loop // -->
      <ImageCard
        v-bind:key="ImageCard.index"
        v-for="ImageCard in breedsList"
        :imageSrc="ImageCard.imgSrc"
        :alt="ImageCard.altText"
        :title="ImageCard.title"
        :cardText="ImageCard.cardText"
        :url="ImageCard.url"
        :linkText="ImageCard.linkText"
      ></ImageCard>
    </div>
  </section>
</template>
<script setup>
import ImageCard from "/components/Image-Card.vue";

import { ref } from "vue";
const breedsList = ref([
  {
    imgSrc: "/images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "Golden",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta possimus, cumque consectetur eos ad quis nostrum
                    deleniti asperiores, pariatur dolorum reiciendis corporis
                    nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
  {
    imgSrc: "/images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "Rhode Island Red",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta possimus, cumque consectetur eos ad quis nostrum
                    deleniti asperiores, pariatur dolorum reiciendis corporis
                    nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
  {
    imgSrc: "/images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "Sapphire Jewel",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta possimus, cumque consectetur eos ad quis nostrum
                    deleniti asperiores, pariatur dolorum reiciendis corporis
                    nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
  {
    imgSrc: "/images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "Seramas",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta possimus, cumque consectetur eos ad quis nostrum
                    deleniti asperiores, pariatur dolorum reiciendis corporis
                    nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
  {
    imgSrc: "/images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "Wheaten Olive Egger",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta possimus, cumque consectetur eos ad quis nostrum
                    deleniti asperiores, pariatur dolorum reiciendis corporis
                    nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
  {
    imgSrc: "/images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "White Leghorn",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta possimus, cumque consectetur eos ad quis nostrum
                    deleniti asperiores, pariatur dolorum reiciendis corporis
                    nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
]);
</script>
<style></style>

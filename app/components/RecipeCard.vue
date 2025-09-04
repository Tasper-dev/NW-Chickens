<script setup>
import { defineProps } from "vue";
const props = defineProps({
  drink: String,
  image: String,
  ingredients: Array,
  instructions: String,
});
</script>
<template>
  <div class="card h-100">
    <h4>{{ props.drink }}</h4>
    <img
      :src="props.image"
      :alt="`Image of ${props.drink}`"
      class="card-img-top"
    />
    <div class="card-body">
      <h5>Ingredients:</h5>
      <ul>
        <li v-for="(item, index) in ingredients" :key="index">
          {{ item.measure }} {{ item.ingredient }}
        </li>
      </ul>
      <h5>Instructions:</h5>
      <p>{{ props.instructions }}</p>
    </div>
  </div>
</template>
<style scoped></style>

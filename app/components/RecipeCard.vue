<script setup>
import { defineProps } from "vue";
const props = defineProps({
  drink: String,
  image: String,
  ingredientOne: String,
  ingredientTwo: String,
  ingredientThree: String,
  ingredientFour: String,
  ingredientFive: String,
  ingredientSix: String,
  ingredientSeven: String,
  instructions: String,
});
</script>
<template>
  <div class="card">
    <h4>{{ props.drink }}</h4>
    <img
      :src="props.image"
      :alt="`Image of ${props.drink}`"
      class="card-img-top"
    />
    <div class="card-body">
      <h5>Ingredients:</h5>
      <ul>
        <li>{{ props.ingredientOne }}</li>
        <li>{{ props.ingredientTwo }}</li>
        <li v-if="props.ingredientThree">{{ props.ingredientThree }}</li>
        <li v-if="props.ingredientFour">{{ props.ingredientFour }}</li>
        <li v-if="props.ingredientFive">{{ props.ingredientFive }}</li>
        <li v-if="props.ingredientSix">{{ props.ingredientSix }}</li>
        <li v-if="props.ingredientSeven">{{ props.ingredientSeven }}</li>
      </ul>
      <h5>Instructions:</h5>
      <p>{{ props.instructions }}</p>
    </div>
  </div>
</template>
<style scoped></style>

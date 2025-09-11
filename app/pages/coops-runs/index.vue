<template>
  <Header>
    <template #subheader>
      <h2>Coops & Runs</h2>
    </template>
  </Header>

  <div class="container my-5 bg-body tertiary">
    <!-- // V-for Loop over each Article // -->
    <div
      v-for="(coopsArticlesObj, index) in coopsArticles"
      :key="index"
      class="row mb-4"
      :class="coopsArticlesObj.customClass"
    >
      <!-- // Article Component // -->
      <div class="col-xl-6 col-md-8 col-sm-10 col-12">
        <Article
          :title="coopsArticlesObj.title"
          :text="coopsArticlesObj.text"
          class="article"
        ></Article>
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from "/components/Header.vue";
import Article from "/components/Article.vue";
import { ref } from "vue";

const coopsArticles = ref([
  {
    customClass: "justify-content-start",
    title: "What to Know",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
                ab incidunt, officia adipisci aliquam quos a est totam voluptate
                et voluptas, sunt soluta ad voluptates deleniti atque nemo autem.
                Maiores.\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                maiores amet itaque deserunt, ad voluptatem cupiditate quam
                suscipit. Reiciendis at expedita porro, vero delectus odio nobis
                sapiente corrupti a. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.\n Explicabo sit velit quasi qui aspernatur vero,
                reprehenderit, magni accusantium laudantium placeat quos, animi
                facere nobis ullam amet earum similique consectetur sed?\n Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda ipsum necessitatibus neque doloremque autem vel corporis
                repudiandae. Doloremque ratione, culpa asperiores modi corrupti
                eligendi exercitationem. Temporibus at nostrum laborum dolores.`,
  },
  {
    customClass: "justify-content-center",
    title: "Size & Space",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
                ab incidunt, officia adipisci aliquam quos a est totam voluptate
                et voluptas, sunt soluta ad voluptates deleniti atque nemo autem.
                Maiores.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                maiores amet itaque deserunt, ad voluptatem cupiditate quam
                suscipit. Reiciendis at expedita porro, vero delectus odio nobis
                sapiente corrupti a. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.\n Explicabo sit velit quasi qui aspernatur vero,
                reprehenderit, magni accusantium laudantium placeat quos, animi
                facere nobis ullam amet earum similique consectetur sed?\n Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda ipsum necessitatibus neque doloremque autem vel corporis
                repudiandae. Doloremque ratione, culpa asperiores modi corrupti
                eligendi exercitationem. Temporibus at nostrum laborum dolores.`,
  },
  {
    customClass: "justify-content-end",
    title: "Protection & Security",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
                ab incidunt, officia adipisci aliquam quos a est totam voluptate
                et voluptas, sunt soluta ad voluptates deleniti atque nemo autem.
                Maiores.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                maiores amet itaque deserunt, ad voluptatem cupiditate quam
                suscipit. Reiciendis at expedita porro, vero delectus odio nobis
                sapiente corrupti a. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.\n Explicabo sit velit quasi qui aspernatur vero,
                reprehenderit, magni accusantium laudantium placeat quos, animi
                facere nobis ullam amet earum similique consectetur sed?\n Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda ipsum necessitatibus neque doloremque autem vel corporis
                repudiandae. Doloremque ratione, culpa asperiores modi corrupti
                eligendi exercitationem. Temporibus at nostrum laborum dolores.`,
  },
]);
useHead({
  title: "NWC | Coops & Runs",
  meta: [
    {
      name: "description",
      content:
        "Discover the best practices for building and maintaining coops and runs to keep your backyard chickens safe, comfortable, and healthy.",
    },
  ],
});
</script>
<style>
.article {
  padding: 1rem;
  transition: all 0.3s ease;
  &:hover {
    border: 2px solid #adb5bd;
    border-radius: 5px;
  }
}
</style>

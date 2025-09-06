<template>
  <Header>
    <template #subheader>
      <h2>Girls Gone Wild!</h2>
    </template>
  </Header>
  <div>
    <!-- //*Carousel*// -->
    <div id="homeCarousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="/images/chicken-carousel-one.jpg"
            class="d-block w-100"
            alt="chickens"
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/chicken-carousel-two.jpg"
            class="d-block w-100"
            alt="chickens"
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/chicken-carousel-three.jpg"
            class="d-block w-100"
            alt="chickens"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div class="container-fluid my-3">
    <div class="row">
      <section
        class="col-xl-10 col-lg-8 col-sm-6 col-12 bg-body-tertiary my-3 p-3"
      >
        <article class="p-5">
          <h2>Intro Article</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta est
            cupiditate veritatis molestiae deleniti, voluptate perferendis
            perspiciatis eos consequatur nulla, in exercitationem reprehenderit?
            Velit sit doloribus delectus quasi quod eius?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sapiente quia molestias
            architecto vero quo? Possimus fugit accusantium similique, sapiente
            obcaecati laboriosam quo? Numquam ex accusamus officia? Vero
            distinctio nulla beatae.
          </p>
        </article>

        <!-- //* V-for Loop for List *// -->
        <article class="p-5">
          <h4>Steps to getting your own brood:</h4>
          <ol>
            <li v-for="(stepObj, index) in stepsGetChickens" :key="index">
              {{ stepObj.step }}
              <NuxtLink
                :to="stepObj.url"
                class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                {{ stepObj.linkText }}</NuxtLink
              >
            </li>
          </ol>
          <img
            src="/images/chickens-grazing-700.jpg"
            class="img-fluid py-5"
            alt="chickens grazing"
            width="700"
            height="467"
          />
        </article>

        <!-- //* Joke Section with API Call *// -->
        <article class="text-center p-5 bg-body-secondary">
          <h3>Fowl Joke of the Day</h3>
          <button
            type="button"
            class="btn btn-success btn-lg"
            @click="getAnimalJoke"
            :disabled="loading"
          >
            Cluck Me
          </button>
          <p class="pt-2 fw-bolder">
            <span v-if="jokeLoading">Loading joke...</span>
            <span v-else-if="jokeErrorMessage">Error: {{ errorMessage }}</span>
            <span v-else-if="animalJoke">
              {{ animalJoke.setup }} {{ animalJoke.delivery }}
            </span>
          </p>
        </article>
      </section>

      <!-- //* Image Card Component & V-for Loop *//-->
      <aside class="my-3 col-xl-2 col-lg-4 col-sm-6 col-12">
        <h3>New Breeds</h3>
        <ImageCard
          v-bind:key="ImageCard.index"
          v-for="ImageCard in newBreeds"
          :imageSrc="ImageCard.imgSrc"
          :alt="ImageCard.altText"
          :title="ImageCard.linkText"
          :cardText="ImageCard.cardText"
          :url="ImageCard.url"
          :linkText="ImageCard.linkText"
        ></ImageCard>
      </aside>
    </div>

    <div class="row">
      <!-- //* Recipe Card Component & API Call *//-->
      <article class="p-5 bg-body-secondary">
        <div class="col-12">
          <h3>Cock-tails</h3>
          <p>
            Part of the fun of raising your own backyard chickens is enjoying
            their antics! Kick off your shoes, put your feet in the grass, and
            sip one of these tasty summer margaritas while you watch your
            chickens shake their tail feathers.
          </p>
        </div>
        <div class="row">
          <div v-if="loading">Loading...</div>
          <div v-if="errorMessage">Error: {{ errorMessage }}</div>
          <div
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            class="col-sm-4 mb-3"
          >
            <RecipeCard
              :drink="cocktail.strDrink"
              :image="cocktail.strDrinkThumb"
              :ingredients="cocktail.ingredients"
              :instructions="cocktail.strInstructions"
              class="p-2"
            ></RecipeCard>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "/components/Header.vue";
import ImageCard from "/components/Image-Card.vue";
import RecipeCard from "/components/RecipeCard.vue";
import { fetchAnimalJoke } from "/services/jokeApi.js";
import { fetchCocktails } from "/services/cocktailsAPI.js";

const stepsGetChickens = ref([
  {
    step: "Coops and Runs for your area weather conditions.",
    url: "/coops-runs",
    linkText: "Coops & Runs",
  },

  { step: "Best breeds for the NW.", url: "/breeds", linkText: "Breeds" },
  {
    step: "Source best feed that supplies what your ladies need.",
    url: "/feeds",
    linkText: "Feeds",
  },
  {
    step: "Predators: what you need to know!",
    url: "#",
    linkText: "Predators",
  },
  {
    step: "Connect with other chicken lovers.",
    url: "#",
    linkText: "List of local groups",
  },
]);

const newBreeds = ref([
  {
    imgSrc: "/images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    cardText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptas itaque enim quas praesentium porro sapiente quod, quibusdam molestias repudiandae.`,
    url: "/breeds",
    linkText: "Sapphire Jewel",
  },
  {
    imgSrc: "/images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    cardText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptas itaque enim quas praesentium porro sapiente quod, quibusdam molestias repudiandae.`,
    url: "/breeds",
    linkText: "Seramas",
  },
  {
    imgSrc: "/images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    cardText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptas itaque enim quas praesentium porro sapiente quod, quibusdam molestias repudiandae.`,
    url: "/breeds",
    linkText: "Wheaten Olive Egger",
  },
]);

// * Cocktail API Call *//
const cocktails = ref([]);
const loading = ref(false);
const errorMessage = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    cocktails.value = await fetchCocktails("margarita");
  } catch (error) {
    console.error("Error:", error);
    errorMessage.value = error.message;
  } finally {
    console.log("Cocktail fetch attempt finished.");
    loading.value = false;
  }
});

// * Joke API Call *//
const animalJoke = ref(null);
const jokeLoading = ref(false);
const jokeErrorMessage = ref(null);

async function getAnimalJoke() {
  jokeLoading.value = true;
  try {
    animalJoke.value = await fetchAnimalJoke();
  } catch (error) {
    console.error("Error:", error);
    jokeErrorMessage.value = error.message;
  } finally {
    console.log("Joke fetch attempt finished.");
    jokeLoading.value = false;
  }
}
</script>
<style scoped></style>

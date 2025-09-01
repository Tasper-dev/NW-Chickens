import { ref } from "vue";

export function useAnimalJoke() {
  const animalJoke = ref(null);
  const loading = ref(false);
  const errorMessage = ref(null);

  const fetchAnimalJoke = async () => {
    loading.value = true;
    try {
      const response = await fetch(
        "https://api.humorapi.com/jokes/search?api-key=654dc1f97e31472c8e75523a1f03004c&keywords=chicken,chickens"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      animalJoke.value = await response.json();
      console.log("Fetched API Data:", animalJoke.value);
    } catch (error) {
      console.error("Error fetching API data:", error);
      errorMessage.value = error.message;
    } finally {
      loading.value = false;
    }
  };
  return {
    animalJoke,
    loading,
    errorMessage,
  };
}

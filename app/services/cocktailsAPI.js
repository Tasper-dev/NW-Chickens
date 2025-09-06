export async function fetchCocktails(query = "margarita") {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log("Fetched Cocktails API Data:", data);
  return data.drinks.map((cocktail) => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({
          ingredient: ingredient,
          measure: measure ? measure.trim() : "",
        });
      }
    }
    return {
      ...cocktail,
      ingredients,
    };
  });
}

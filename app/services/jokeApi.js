export async function fetchAnimalJoke() {
  const response = await fetch(
    "https://api.humorapi.com/jokes/search?api-key=654dc1f97e31472c8e75523a1f03004c&keywords=chicken,chickens"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log("Fetched Joke API Data:", data);
  return data;
}

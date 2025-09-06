export async function fetchAnimalJoke() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log("Fetched Joke API Data:", data);
  return data;
}

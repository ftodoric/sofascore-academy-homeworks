async function getPokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon";

  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const decodedData = await response.json();
      display(decodedData.results);
    } else {
      console.log("Response status code is not OK!");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
  }
}

async function getSpecs(url) {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const decodedData = await response.json();
      displayPokemon(decodedData);
    } else {
      console.log("Response status code is not OK!");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
  }
}

function displayPokemon(character) {
  const pokeDiv = document.getElementById("poke-list");

  // pokemon list item
  const pokeItem = document.createElement("li");
  pokeItem.className = "poke-item";

  // pokemon name
  const pokeLabel = document.createElement("p");
  pokeLabel.innerText = `${
    character.name.charAt(0).toUpperCase() + character.name.slice(1)
  }`;

  // pokemon image
  const pokeImg = document.createElement("img");
  pokeImg.src = character.sprites.front_default;
  pokeImg.width = 80;

  // remove button
  const pokeButton = document.createElement("button");
  pokeButton.className = "remove-button";
  pokeButton.innerText = "Remove";
  pokeButton.onclick = function () {
    pokeItem.remove();
  };

  // append to the main div
  pokeDiv.appendChild(pokeItem);

  // append to pokeItem
  pokeItem.appendChild(pokeLabel);
  pokeItem.appendChild(pokeImg);
  pokeItem.appendChild(pokeButton);
}

function display(characters) {
  characters.forEach((character) => {
    getSpecs(character.url);
  });
}

getPokemons();

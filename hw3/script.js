async function getPokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon";

  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const pokemonData = await response.json();
      pokemonData.results.forEach((character) => {
        getSpecs(character.url);
      });
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
      const pokeSpecs = await response.json();
      displayPokemonSpecs(pokeSpecs);
    } else {
      console.log("Response status code is not OK!");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
  }
}

function displayPokemonSpecs(character) {
  const pokeList = document.getElementById("poke-list");

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

  // pokemon stats
  const pokeStats = document.createElement("div");
  const pokeStatNames = document.createElement("div");
  pokeStatNames.className = "poke-stat-name";
  const pokeStatValues = document.createElement("div");
  pokeStats.appendChild(pokeStatNames);
  pokeStats.appendChild(pokeStatValues);
  pokeStats.className = "poke-stats";

  // iterate
  character.stats.forEach((component) => {
    // stat name
    const statName = document.createElement("p");
    statName.innerText = component.stat.name + ": ";
    pokeStatNames.appendChild(statName);

    // stat value
    const statValue = document.createElement("p");
    statValue.innerText = component.base_stat;
    pokeStatValues.appendChild(statValue);
  });

  // remove button
  const pokeButton = document.createElement("button");
  pokeButton.className = "remove-button";
  pokeButton.innerText = "Remove";
  pokeButton.onclick = function () {
    pokeItem.remove();
  };

  // create pokeHeader
  const pokeHeader = document.createElement("div");
  pokeHeader.appendChild(pokeLabel);
  pokeHeader.appendChild(pokeImg);

  // append to pokeItem
  pokeItem.appendChild(pokeHeader);
  pokeItem.appendChild(pokeStats);
  pokeItem.appendChild(pokeButton);

  // append to the list
  pokeList.appendChild(pokeItem);
}

getPokemons();

function fetchPokemon() {
    const pokemonName = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => displayPokemon(data))
        .catch(error => {
            document.getElementById('pokemonDisplay').innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

function displayPokemon(data) {
    const pokemonHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
    `;
    document.getElementById('pokemonDisplay').innerHTML = pokemonHTML;
}

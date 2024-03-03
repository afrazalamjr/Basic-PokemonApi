    let pokemonData;

                function showByName() {
                    document.querySelector(".nameInput").style.display = "block";

                    
                }
                
                function showByType() {
                    document.querySelector(".typeInput").style.display = "block";
                }

                function searchPokemonByName() {
                    const pokemonName = document.getElementById("pokemonNameInput").value.toLowerCase();
                    
                    // Make a request to the PokeAPI for the specific Pokemon
                    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Pokemon not found! Status: ${response.status}`);
                            }
                            return response.json();
                        })
                        .then(Data => {
                            pokemonData=Data;
                            // Display the name and URL of the Pokemon
                            const resultDiv = document.getElementById("pokemonNameDetails");
                            console.log(pokemonData);
                        resultDiv.innerHTML = `<p>Name: ${pokemonData.name}</p><p>URL: ${pokemonData.order}</p>`;
                        })
                        .catch(error => {
                            // Handle errors
                            console.error('Error fetching Pokemon data:', error.message);
                        });
                }

                function searchPokemonByType() {
                    const pokemonType = document.getElementById("pokemonTypeInput").value.toLowerCase();
                    
                    // Make a request to the PokeAPI for the specific Pokemon
                    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonType}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Pokemon not found! Status: ${response.status}`);
                            }
                            return response.json();
                        })
                        .then(Data => {
                            pokemonData=Data;
                            // Display the name and URL of the Pokemon
                            const resultDiv = document.getElementById("pokemonTypeDetails");
                            console.log(pokemonData);
                        resultDiv.innerHTML = `<p>Name: ${pokemonData.name}</p><p>URL: ${pokemonData.order}</p>`;
                        })
                        .catch(error => {
                            // Handle errors
                            console.error('Error fetching Pokemon data:', error.message);
                        });
                }
                

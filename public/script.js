fetchData();
async function fetchData(){
    try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    if(!response.ok){
        throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgelem = document.getElementById("imageElem");

    imgelem.src = pokemonSprite;
    imgelem.style.display = "block";

   
} catch(error){
    console.error(error);
}
}




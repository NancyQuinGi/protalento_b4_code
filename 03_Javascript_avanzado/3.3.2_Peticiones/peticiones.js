// 1 instalar request -->
//
const request = require('request');



// 3 Peticiones con request
/* request.get('https://pokeapi.co/api/v2/pokemon/pikachu', function(error,response,body){
    if(response.statusCode === 200){
        // JSON.parse() --> funcion en JS que se utiliza para convertir el JSON de la peticion en un objeto den JS
        const json = JSON.parse(body);
        console.log(json)
    } else {
        console.log('Algo esta mal en la peticion')
    }

});
 */
// 4 Reutilizar la petición

const getPokemonByName = (pokemonName) => {
    request.get(`https://pokeapi.co/api/v2/pokemon/pikachu ${pokemonName}`, function(error,response,body){
    if(response.statusCode === 200){
        // JSON.parse() --> funcion en JS que se utiliza para convertir el JSON de la peticion en un objeto den JS
        const json = JSON.parse(body);
        console.log(json.name)
    } else {
        console.log('Algo esta mal en la peticion')
    }

});
}
getPokemonByName('Montse');
getPokemonByName('persian');
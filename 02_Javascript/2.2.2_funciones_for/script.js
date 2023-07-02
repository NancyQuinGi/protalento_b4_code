//Ejercicio 1 ciclo for
function numeros1al50 (){
    let arraynumeros = [];
    for (let index = 1; index <= 50; index++) {
        if (index % 2 !== 0) {
            arraynumeros.push(index);
        }
    }
    return arraynumeros
}

function ejercicio1() {
    console.log(numeros1al50());
  
    const numero1al50 = numeros1al50();
    const elementoResultado = document.getElementById("resultado-1");
    elementoResultado.innerHTML = "";
  
    for (let i = 0; i < numero1al50.length; i++) {
      const numero150 = numero1al50[i];
      const newtext = document.createTextNode(numero150);
      elementoResultado.appendChild(newtext);
  
      if (i !== numero1al50.length - 1) {
        const coma = document.createTextNode(", ");
        elementoResultado.appendChild(coma);
      }
    }
  }

//Ejercicio 2 ciclo for

function buscarPokemons(numero){
  const pokemonData = [
    { number: 1, name: "Bulbasaur" },
    { number: 2, name: "Ivysaur" },
    { number: 3, name: "Venusaur" },
    { number: 4, name: "Charmander" },
    { number: 5, name: "Charmeleon" },
    { number: 6, name: "Charizard" },
    { number: 7, name: "Squirtle" },
    { number: 8, name: "Wartortle" },
    { number: 9, name: "Blastoise" },
    { number: 10, name: "Caterpie" },
    { number: 11, name: "Metapod" },
    { number: 12, name: "Butterfree" },
    { number: 13, name: "Weedle" },
    { number: 14, name: "Kakuna" },
    { number: 15, name: "Beedrill" },
    { number: 16, name: "Pidgey" },
    { number: 17, name: "Pidgeotto" },
    { number: 18, name: "Pidgeot" },
    { number: 19, name: "Rattata" },
    { number: 20, name: "Raticate" },
    { number: 21, name: "Spearow" },
    { number: 22, name: "Fearow" },
    { number: 23, name: "Ekans" },
    { number: 24, name: "Arbok" },
    { number: 25, name: "Pikachu" },
    { number: 26, name: "Raichu" },
    { number: 27, name: "Sandshrew" },
    { number: 28, name: "Sandslash" },
    { number: 29, name: "Nidoran♀" },
    { number: 30, name: "Nidorina" },
    { number: 31, name: "Nidoqueen" },
    { number: 32, name: "Nidoran♂" },
    { number: 33, name: "Nidorino" },
    { number: 34, name: "Nidoking" },
    { number: 35, name: "Clefairy" },
    { number: 36, name: "Clefable" },
    { number: 37, name: "Vulpix" },
    { number: 38, name: "Ninetales" },
    { number: 39, name: "Jigglypuff" },
    { number: 40, name: "Wigglytuff" },
    { number: 41, name: "Zubat" },
    { number: 42, name: "Golbat" },
    { number: 43, name: "Oddish" },
    { number: 44, name: "Gloom" },
    { number: 45, name: "Vileplume" },
    { number: 46, name: "Paras" },
    { number: 47, name: "Parasect" },
  ];
  let resultado = [];
  for (let i = 1; i <= numero; i++) {
    if (i % 5 === 0) {
      const pokemon = pokemonData.find(p => p.number === i);
      resultado.push(pokemon);
    }
  }
  return resultado;
}
console.log(buscarPokemons());

function ejercicio2() {
  const valorIngresado = parseInt(document.getElementById("input-ejercicio-2").value);
  const pokemonesEncontrados = buscarPokemons(valorIngresado);
  const elementoResultado = document.getElementById("resultado-2");
  elementoResultado.innerHTML = "";

  for (let i = 0; i < pokemonesEncontrados.length; i++) {
    const pokemon = pokemonesEncontrados[i];
    const newtext = document.createTextNode(pokemon.name);
    elementoResultado.appendChild(newtext);

    if (i !== pokemonesEncontrados.length - 1) {
      const coma = document.createTextNode(", ");
      elementoResultado.appendChild(coma);
    }
  }
}
// Ejercicio 3 
function buscarNumeros (){
  let arraySugerido = [4,'dos',8,'tres',5,9,1,'cero'];
  let resultados = [];
  for (let index = 0; index <= arraySugerido.length; index++) {
      if (typeof arraySugerido[index] === "number") {
       resultados.push(arraySugerido[index]);  
      }
      
  }
  return resultados;
  
}


function ejercicio3() {
  console.log(buscarNumeros());

  const buscarNumero = buscarNumeros();
  const elementoResultado = document.getElementById("resultado-3");
  elementoResultado.innerHTML = "";

  for (let i = 0; i < buscarNumero.length; i++) {
    const resultadoNumeros = buscarNumero[i];
    const newtext = document.createTextNode(resultadoNumeros);
    elementoResultado.appendChild(newtext);

    if (i !== buscarNumero.length - 1) {
      const coma = document.createTextNode(", ");
      elementoResultado.appendChild(coma);
    }
  }
}

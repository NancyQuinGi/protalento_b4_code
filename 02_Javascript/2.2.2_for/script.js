const array = [1,2,3,4,5,6,7,8,9,10];
// Inicialización  => let index = 0; index => es el contador o acumulador
// condicional => index < array.length; => condicion de paro
// si  la cumple
    // bloque de codigo {...}
    // Incremento o decremento
// si no la cumple la condicion for termina
    // nada, de acabo    
const myNuevoArreglo = [];
for (let index = 0; index < array.length; index++) {
    // const element = array[index];
    console.log(array[index]);
    myNuevoArreglo.push(array[index]);
}
console.log(myNuevoArreglo);

const pares1 =[];

for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0){
        pares1.push(array[index]);    
    }
    
    myNuevoArreglo.push(array[index]);
}

const pares2 =[];

for (let index = 1; index < array.length; index += 2) {
    // const element = array[index];
    //console.log(array[index]);
    pares2.push(array[index]);
}
console.log(pares1);
console.log(pares2);


const arreglo100 = [];

for (let index = 1; index <= 100; index++) {
    arreglo100.push(index);   
}
const pares3 = [];

for (let index = 0; index < arreglo100.length; index++){
    if (arreglo100[index] % 2 === 0){
        pares3.push(arreglo100[index]);    
    }
}
console.log(pares3);

/* Hacer un array vacio, y generar 10 números al azar, luego guardarlos en el array y mostrar en consola el resultado*/

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Creo un array para llevar la cuenta de los valores
  let valueAppearances = [];
  
  // inicializo el array con la cuenta de los valores a cero
  for (let index = 0; index < 10; index++) {
    valueAppearances.push(index);
  }
  
  // saco aleatorios un montón de veces
  for (let i = 0; i <= 10; i++) {
    // obtengo el aleatorio entre 1 y 10
    let randomIndex = random(0, 9);
    // incremento las apariciones de este valor
    valueAppearances[randomIndex]++;
  }
  // muestro el array resultante, que debería tener más o menos las mismas apariciones
  // recuerda, para los índices entre 2 y 9
  console.log(valueAppearances);

/* El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado. */

const palabraUsuario = prompt("Ingresa palabras separadas por coma")
console.log(palabraUsuario);
const arregloPalabra = palabraUsuario.split(",");
console.log(arregloPalabra);

/* 
De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo. */

const array1 = [10,40,30,20,15,5];

function compareNumbers(a,b){
    console.log(`a:${a}, b: ${b}, a-b: ${a-b}`);
    return a-b;
};

console.log(array1.sort(compareNumbers));
console.log(Math.max(...array1));
console.log(Math.min(...array1));

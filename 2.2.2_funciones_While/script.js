//Ejercicio 1 ciclo While
function multiplos5(numeroIngresado) {
    let index = 1;
    let multiplos = [];
  
    while (index <= numeroIngresado) {
      if (index % 5 === 0) {
        multiplos.push(index);
      }
      index++;
    }
  
    return multiplos;
  }
  
  function ejercicio1() {
    const valorIngresado = parseInt(document.getElementById("input-ejercicio-1").value);
  
    console.log(multiplos5(valorIngresado));
  
    const multiplos = multiplos5(valorIngresado);
    const elementoResultado = document.getElementById("resultado-1");
    elementoResultado.innerHTML = "";
  
    for (let i = 0; i < multiplos.length; i++) {
      const multiplo = multiplos[i];
      const newtext = document.createTextNode(multiplo);
      elementoResultado.appendChild(newtext);
  
      if (i !== multiplos.length - 1) {
        const coma = document.createTextNode(", ");
        elementoResultado.appendChild(coma);
      }
    }
  }
  

//Ejercicio 2 ciclo While
function loteria(numero1, numero2) {
    let index = 1;
    let resultados = [];
  
    while (index <= 50) {
      if (index === numero1 || index === numero2) {
        resultados.push(index + " ¡Lotería!");
      } else {
        resultados.push(index);
      }
      index++;
    }
  
    return resultados;
  }
  
  function ejercicio2() {
    const valorIngresado1 = parseInt(document.getElementById("input-ejercicio-2-1").value);
    const valorIngresado2 = parseInt(document.getElementById("input-ejercicio-2-2").value);
  
    console.log(loteria(valorIngresado1, valorIngresado2));
  
    const resultados = loteria(valorIngresado1, valorIngresado2);
    const elementoResultado2 = document.getElementById("resultado-2");
    elementoResultado2.innerHTML = "";
  
    for (let i = 0; i < resultados.length; i++) {
      const resultado = resultados[i];
      const newtext = document.createTextNode(resultado);
      elementoResultado2.appendChild(newtext);
  
      if (i !== resultados.length - 1) {
        const coma = document.createTextNode(", ");
        elementoResultado2.appendChild(coma);
      }
    }
  }
  // Ejercicio 3

  function capturarNumeros(numeroIngresado) {
    let numeros = [];
    while (numeroIngresado !== 0) {
      if (!isNaN(numeroIngresado)) {
        numeros.push(numeroIngresado);
      }
      numeroIngresado = parseInt(prompt("Ingrese otro número (ingrese 0 para terminar):"));
    }
  
    return numeros;
  }
  
  function ejercicio3() {
    const valorIngresado = parseInt(document.getElementById("input-ejercicio-3").value);
    const capturarNums = capturarNumeros(valorIngresado);
    const elementoResultado = document.getElementById("resultado-3");
    elementoResultado.innerHTML = "";
  
    for (let i = 0; i < capturarNums.length; i++) {
      const capturarNum = capturarNums[i];
      const newtext = document.createTextNode(capturarNum);
      elementoResultado.appendChild(newtext);
  
      if (i !== capturarNums.length - 1) {
        const coma = document.createTextNode(", ");
        elementoResultado.appendChild(coma);
      }
    }
  }
// Ejercicio 4
function capturarPalabras(palabraIngresada) {
    let palabras = [];
    
    while (palabraIngresada !== "") {
        palabras.push(palabraIngresada);
        palabraIngresada = prompt("Ingrese otra letra o palabra (deje vacío para terminar):");
    }
    return palabras
}

function ejercicio4() {
    const valorIngresado = (document.getElementById("input-ejercicio-4")).value;
    const captPalabras = capturarPalabras(valorIngresado);
    const elementoResultado = document.getElementById("resultado-4");
    elementoResultado.innerHTML = "";
  
    for (let i = 0; i < captPalabras.length; i++) {
      const captPalabra = captPalabras[i];
      const newtext = document.createTextNode(captPalabra);
      elementoResultado.appendChild(newtext);
  
      if (i !== captPalabras.length - 1) {
        const coma = document.createTextNode(", ");
        elementoResultado.appendChild(coma);
      }
    }
  }
// ejercio 5
function mostrarMensajePersonalizado(diaIngresado) {
     
    while (diaIngresado !== "") {
      switch (diaIngresado.toLowerCase()) {
        case "lunes":
          alert("¡Feliz inicio de semana!");
          break;
        case "martes":
          alert("¡Ánimo, es martes!");
          break;
        case "miercoles":
          alert("¡Mitad de semana, vamos!");
          break;
        case "jueves":
          alert("¡Ya casi es viernes!");
          break;
        case "viernes":
          alert("¡Viernes, por fin!");
          break;
        case "sabado":
          alert("¡Disfruta tu día de descanso!");
          break;
        case "domingo":
          alert("Ve a descansar");
          return; // Terminar la función y la captura de información
        default:
          alert("Día no válido, por favor ingrese otro día.");
      }
  
      diaIngresado = prompt("Ingrese otro día de la semana:");
    }
  }
  
  mostrarMensajePersonalizado();
  
  function ejercicio4() {
    const valorIngresado = ((document.getElementById("input-ejercicio-5")).value).toUpperCase();
    mostrarMensajePersonalizado(valorIngresado);
    const elementoResultado = document.getElementById("resultado-5");
    elementoResultado.innerHTML = "";
  
  }
  

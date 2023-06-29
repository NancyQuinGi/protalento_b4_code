function esDivisible1() {
    const numeroIngresado = prompt("Dame un número y te diré si es divisible entre dos.");
    // console.log(typeof numeroIngresado);
    // console.log(parseFloat(numeroUsuarioPalabra) / 2);
    // console.log(parseFloat(numeroIngresado) % 2); // 0 divisible => 1 no es divisible
    if((parseFloat(numeroIngresado) % 2) === 0) {
        return "Es divisible!!!!";
    } else { // else if((parseFloat(numeroUsuarioPalabra)% 2) === 1)
        return "No es divisible!!!!";
    }
}

function esDivisible2(numeroIngresado) {
    if((parseFloat(numeroIngresado) % 2) === 0) {
        return "Es divisible!!!!"
    } else { // else if((parseFloat(numeroUsuarioPalabra)% 2) === 1)
        return "No es divisible!!!!";
    }
}

function ejercicio1(){
    const valorIngresado = document.getElementById("input-ejercicio-1").value;
    console.log(esDivisible2(valorIngresado));
    const newtext = document.createTextNode(esDivisible2(valorIngresado));
    /*document.getElementById("resultado-1").innerHTML="";
    document.getElementById("resultado-1").appendChild(newtext);*/
    const elementoResultado = document.getElementById("resultado-1");
    elementoResultado.innerHTML = "";
    elementoResultado.appendChild(newtext);
}
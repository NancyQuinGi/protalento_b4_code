function soyCien(){return 100;}
function soyDocientos(){return 200;}
console.log(soyCien());
console.log(soyDocientos());

// Esta fun ción recibe como dos parametros dos funciones

function sumaDosFunciones(funtionOne, funtionTwo){
    console.log(funtionOne, funtionTwo);
}
sumaDosFunciones(soyCien(),soyDocientos());
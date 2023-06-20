
/* EJERCICIO 1 Solicitar al usuario que responda a la pregunta (“¿Eres bellísimo/a?”) encaso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.*/

let respuesta = prompt('¿Eres Bellisimo/a?');
// PRE VALIDACION middleware intermediario validación
respuesta = respuesta.toLowerCase();
//imaginemos preciosas lineas de codigo que traducen
if (respuesta == 'si' || respuesta == 'yes' || respuesta == 'sí') {
  alert('Ciertamente');
} else if (respuesta == 'yes'){
  alert('Of Course');
} else if (respuesta == 'no'){
  alert('No te Creo');
} else {
  alert('Solo te di dos opciones');
}
/* EJERCICIO 2 Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “X número es divisible entre 2” o “X número.*/

const numeroUsuarioPalabra = prompt('Dame un número y te dire si es divisible por 2');
console.log (typeof numeroUsuarioPalabra);
//console.log (parseFloat(numeroUsuarioPalabra / 2));
//console.log (parseFloat(numeroUsuarioPalabra % 2)); // divisible es 0 en el modulo, y si es 1  no es divisible
if (parseFloat(numeroUsuarioPalabra % 2)=== 0){
    alert('Es divisible');
} else{
    alert(' No Es divisible');
}


/*EJERCICIO 3 Crear un programa que determine si un número introducido en un PROMPT es par o no, la respuesta será mostrada en un ALERT.*/

let numeroPar = prompt('Dame un número para verificar si un numero es par o no');
if (parseFloat(numeroPar % 2) === 0){
    alert('Es un número Par');
} 
else{
    alert(' No es un número Par');
}

/*EJERCICIO 4 Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.*/

let numeroCliente = parseFloat(prompt('Escribir numero de cliente'));
console.log(numeroCliente);
if (numeroCliente === 1000){
    alert('Ganaste un premio');
} else{
    alert('Lo sentimos, sigue participando');
}

/*EJERCICIO 5 Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
menor. No considerar el caso en que ambos números son iguales. */

alert('Vamos a identificar el menor de nos números, a continuación digitelos')
let numeroUno = parseFloat(prompt('Ingrese el Número Uno:'));
let numeroDos = parseFloat(prompt('Ingrese el Número Dos:'));
if (numeroUno < numeroDos){
    alert(numeroUno + ' es menor que ' + numeroDos);
} else if(numeroUno === numeroDos){
    alert('Vuelva a escribir, deben ser distintos')
}
else{
    alert(numeroDos + ' es menor que ' + numeroUno);
}


/*EJERCICIO 6 Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales. */

alert('Por favor ingrese tres números');
let numUno = parseFloat(prompt('Ingrese el número 1'));
let numDos = parseFloat(prompt('Ingrese el número 2'));
let numTres = parseFloat(prompt('Ingrese el número 3'));
let mayor = Math.max(numUno, numDos, numTres);
console.log(mayor);
if (numUno === numDos){
    alert(mayor + ' Es el número Mayor y son iguales los numeros 1 y 2');
}else if (numUno === numTres){
    alert(mayor + ' Es el número Mayor y son iguales los numeros 1 y 3');
}else if (numDos === numTres){
    alert(mayor + ' Es el número Mayor y son iguales los numeros 2 y 3');
} else{
    alert(mayor + ' Es el número Mayor');
}

/*EJERCICIO 7 Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.*/

let diaSemana = prompt(' Por favor indica en que dia de la Semana estamos');
diaSemana = diaSemana.toLowerCase();
if (diaSemana === 'lunes'){
    alert('Hoy es Lunes, te deseo un buen inicio de Semana');

} else if (diaSemana === 'martes' || diaSemana ==='miercoles' || diaSemana ==='miércoles' || diaSemana ==='jueves'){
    alert('Hoy es ' + diaSemana + ' te deseo un buen día y sigue trabajando esperancito/a');
} else if (diaSemana === 'viernes'){
    alert('Hoy es ' + diaSemana + ' te deseo un buen día y disfruta el fin de semana');
} else if (diaSemana === 'sábado' || diaSemana ==='sabado' || diaSemana ==='domingo'){
    alert('Hoy es ' + diaSemana + ' te deseo un buen día y sigue descansando');
}

/*EJERCICIO 8 Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.*/

let calificacion = parseFloat(prompt('Ingrese la calificacion del 1 a 10'));
if (calificacion > 1 && calificacion < 6 ){
    alert('Su calificacion es: REPROBADO');
} else if (calificacion === 6 || calificacion === 7 || calificacion === 8 ){
    alert('Su calificacion es: REGULAR');
} else if  (calificacion === 9){
    alert('Su calificacion es: BIEN');
} else if  (calificacion === 10){
    alert('Su calificacion es: EXCELENTE');
} else if (calificacion < 1 || calificacion > 10){
    alert('ERROR, ingrese la calificación dentro del rango indicado');
}
/*EJERCICIO 9 Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
    ● El helado sin topping cuesta 50 MXN.
    ● El topping de oreo cuesta 10 MXN.
    ● El topping de KitKat cuesta 15 MXN.
    ● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

let topping = prompt('¿Que topping de helado deseas comprar?, escoge entre sin topping, oreo, KitKat y brownie; escribe aqui para saber su costo:');
topping = topping.toLowerCase();
console.log(topping)
if (topping === 'sin topping'){
    alert('El helado sin topping cuesta 50 MXN.')
}else if (topping === 'oreo'){
    alert('El topping de oreo cuesta 10 MXN')
}else if (topping === 'kitkat'){
    alert('El topping de KitKat cuesta 15 MXN')

}else if (topping === 'brownie'){
    alert('El topping de brownie cuesta 20 MXN')
}else{
    alert('no tenemos este topping, lo sentimos')
    alert('El helado sin topping cuesta 50 MXN.')
}

/*EJERCICIO 10 Un conocido portal de educación en tecnología está ofreciendo
programas para aprender a desarrollar aplicaciones. Escribe un programa
que le indique a la persona interesada cuánto deberá pagar
mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su
costo mensual:
● Course: $4999 MXN
● Carrera $3999 MXN
● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el
descuento correspondiente al precio final.
● Beca Facebook: 20% de descuento.
● Beca Google: 15% de descuento.
● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario
cuánto gastaría en total por el curso elegido, tomando en cuenta las
siguientes duraciones:
● Course: 2 meses
● Carrera 6 meses
● Master: 12 meses*/

let course = 4999;
let carrera = 3999;
let master = 2999;
let programaEducativo =(prompt('El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:\n 1 Course: $4999 MXN\n 2 Carrera $3999 MXN\n 3 Master: $2999 MXN\n Escribe el nombre del programa para saber informacion'
));
programaEducativo = programaEducativo.toLowerCase();
let beca = (prompt('¿Cuenta con una beca?:\n 1. No\n 2. Facebook\n 3. Google\n 4. Jesua \n Escribe el nombre de la beca'));
beca = beca.toLowerCase();

if(programaEducativo === 'course' && beca === 'no'){
    alert('El costo del programa es 4999 MXN y su duracion es de 2 meses')
} else if (programaEducativo === 'course' && beca === 'facebook'){
        course = course - ((course/100)*20);
        alert('El costo del programa es '+ course +' MXN y su duracion es de 2 meses');
}else if (programaEducativo === 'course' && beca === 'google'){
        course = course -((course/100)*15)
        alert('El costo del programa es '+ course +'MXN y su duracion es de 2 meses');
}else if (programaEducativo === 'course' && beca=== 'jesua'){
        course = course-((course/100)*50)
        alert('El costo del programa es '+ course +' MXN y su duracion es de 2 meses');
} 

if(programaEducativo === 'carrera' && beca === 'no'){
    alert('El costo del programa es 3999 MXN y su duracion es de 6 meses')
} else if (programaEducativo === 'carrera' && beca === 'facebook'){
        carrera = carrera -((carrera/100)*20)
        alert('El costo del programa es '+ carrera +'MXN y su duracion es de 6 meses');
}else if (programaEducativo === 'carrera' && beca === 'google'){
        carrera = carrera -((carrera/100)*15)
        alert('El costo del programa es '+ carrera +'MXN y su duracion es de 6 meses');
}else if (programaEducativo === 'carrera' && beca=== 'jesua'){
        carrera = carrera -((carrera/100)*50)
        alert('El costo del programa es '+ carrera +'MXN y su duracion es de 6 meses');
}

if(programaEducativo === 'master' && beca === 'no'){
    alert('El costo del programa es 2999 MXN y su duracion es de 12 meses')
} else if (programaEducativo === 'master' && beca === 'facebook'){
        master = master -((master/100)*20)
        alert('El costo del programa es '+ master +'MXN y su duracion es de 12 meses');
}else if (programaEducativo === 'master' && beca === 'google'){
        master = master-((master/100)*15)
        alert('El costo del programa es '+ master +'MXN y su duracion es de 12 meses');
}else if (programaEducativo === 'master' && beca=== 'jesua'){
        master = master-((master/100)*50)
        alert('El costo del programa es '+ master +'MXN y su duracion es de 12 meses');
}

/*EJERCICIO 11 Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros
consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto”
ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo
total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al
total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros
consumidos.*/

let coche = 0.20;
let moto = 0.10;
let autobus = 0.5;
let totalPago = null;
let vehiculo = prompt('Digite el nombre se su vehiculo, puede ser\n coche \n moto \n autobus');
vehiculo = vehiculo.toLowerCase();
let litrosConsumidos = parseFloat (prompt('Digite la cantidad de litros de combustible consumidos'));
let KilometrosRecorridos = parseFloat (prompt('Digite la cantidad de Kilometros recorridos'));
console.log(vehiculo);


if (vehiculo === "coche" && (litrosConsumidos > 0 && litrosConsumidos <= 100)){
    totalPago = (coche * KilometrosRecorridos) + 5;
    alert('Total a pagar por su vehiculo '+ vehiculo + ' es de ' + totalPago);
} else if (vehiculo === "coche" && litrosConsumidos > 100 ){
    totalPago = (coche * KilometrosRecorridos) + 10;
    alert('Total a pagar por su vehiculo '+ vehiculo + ' es de ' + totalPago);
} 


if (vehiculo === "moto" && (litrosConsumidos > 0 && litrosConsumidos <= 100)){
    totalPago = (moto * KilometrosRecorridos) + 5;
    alert('Total a pagar por su vehiculo '+ vehiculo + ' es de ' + totalPago);
} else if (vehiculo === "moto" && litrosConsumidos > 100 ){
    totalPago = (moto * KilometrosRecorridos) + 10;
    alert('Total a pagar por su vehiculo '+ vehiculo + ' es de ' + totalPago);
} 

if (vehiculo === "autobus" && (litrosConsumidos > 0 && litrosConsumidos <= 100)){
    totalPago = (autobus * KilometrosRecorridos) + 5;
    alert('Total a pagar por su vehiculo '+ vehiculo + ' es de ' + totalPago);
} else if (vehiculo === "autobus" && litrosConsumidos > 100 ){
    totalPago = (autobus * KilometrosRecorridos) + 10;
    alert('Total a pagar por su vehiculo '+ vehiculo + ' es de ' + totalPago);
}
// Comentario de una linea
/*
if (condicion){
  bloque de codigo a ejecutar si la   
  condicion es verdadera
}
*/
/*
let nombre = prompt('¿Cómo te llamas?');
let numero = 5;
alert(typeof numero);

if (typeof nombre == 'string') {
  alert('hey ese nombre es curioso');
} else {
  alert('apoco eso es un nombre');
}
if (nombre == 'mali'){
  alert('Hey, así me llamo');
} else if(nombre == 'juan'){
  alert('tengo muchos amigos con ese nombre');
} else {
  alert('que bonito nombre');
}*/

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



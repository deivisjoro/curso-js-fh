/* son funciones que vienen dentro del objeto window */

/*
Para los navegadores el objeto global es window
Para node el objeto global es global
*/

/*
Alert
Recibe un string (string, variable, template, concatenaciones, etc) y muestra una ventana modal con el mensaje conrrespondiente y un boton de aceptar para cerrar la ventana, es una instruccion bloqueante, hasta que no se cierre la ventana no se sigue con el flujo de las instrucciones descritas en js
*/
alert('Hola mundo');


/*
Prompt
Recibe dos string, uno como cabecera del cuerpo de la ventana y otro como valor inicial del input
muestra un mensaje y un input para que el usuario escriba un valor, el resultado de esta funcion se puede asignar a una variable, el valor siempre sera recibido como string y dos botones, el boton cancelar retorna null, sino se escribe nada en el input se retorna string vacio (diferente a null, undefined)
podemos utilizarlo asi tambien
prompt('Cual es tu edad', '');
prompt('Cual es tu edad');
*/
prompt('Cual es tu edad', '0');

/*
Confirm
Recibe un string que sera mostrado al usuario, el usuario debe presionar aceptar o cancelar para cerrar la ventana, si presiona cancelar la funcion retorna false y si presiona aceptar la funcion retorna true
*/
confirm('Desea salir de la pagina?'); 
//podemos asignar a una variable
let respuesta = confirm('Desea salir de la pagina?'); 
console.log(respuesta)

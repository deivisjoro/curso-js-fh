//QUE SON LOS CONDICIONALES ???
let a = 5;

//la estructura if, espera una expresion booleana
//pero hay algunas excepciones donde se puede aceptar undefined, null (estos dos por que tienden a "falsy")
//condicional simple
if ( a > 10 ) { 
  //el programa nunca entra a este scope o bloque porque a no es mayor a 10
  console.log('A es mayor a 10');
}
console.log('Fin de programa');

//condicional compuesto, donde se tiene en cuenta las dos posibles opciones de la logica booleana
if ( a >= 10 ) { 
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

const hoy = new Date(); 
console.log({hoy});
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes.....

console.log({ dia });


//condicional anidado
if(a===0){
  console.log('Domingo');  
}
else{
  if(a===1){
    console.log('Lunes');  
  }
  else{
    console.log('No es domingo ni lunes');
  }
}

//condicional multiple
if ( dia === 0 ) {
    console.log('Domingo');
} else if( dia === 1 ) {
    console.log('Lunes');
} else if ( dia === 2 ){
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}

//un condicional acepta multiples valores booleanos, unidos con operadores booleanos como el Y (&&) y el O (||) , tambien se puede utilizar la negacion con el simbolo (!) , la cantidad deseada y las combinaciones que se requieran, tambien se pueden utilizar los parentesis
const horaMilitar = hoy.getHours();
console.log({horaMilitar});
if(horaMilitar>=0 && horaMilitar<=5){
  console.log('Es de madrugada');
}
else if(horaMilitar>=6 && horaMilitar<=11){
  console.log('Es de mañana');
} 
else if(horaMilitar>=12 && horaMilitar<=17){
  console.log('Es de tarde');
} 
else if(horaMilitar>=18 && horaMilitar<=23){
  console.log('Es de noche');
} 
else{
  console.log('Error la seccion del dia no existe');
} 

//switch
let diaLetra="";
switch(dia){
  case 0: diaLetra = "Domingo"; break;
  case 1: diaLetra = "Lunes"; break;
  case 2: diaLetra = "Martes"; break;
  case 3: diaLetra = "Miercoles"; break;
  case 4: diaLetra = "Jueves"; break;
  case 5: diaLetra = "Viernes"; break;
  case 6: diaLetra = "Sabado"; break;
  default: diaLetra = "Error dia no existe"; break;
}
console.log({diaLetra});

// Sin usar If Else, o Switch, únicamente objetos
//los objetos aceptan propiedades numericas
const diasLetras = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miércoles',
    4:'jueves',
    5:'viernes',
    6:'sábado',
};
//como es una propiedad numerica no acepta la notacion del punto
console.log(diasLetras[dia]);

//en caso que el numero este fuera de rango se puede enviar el mensaje de error de varias formas, con un condicional o directo en el console.log
//console.log(diasLetras[dia] || 'Dia no definido');
//lo anterior se conoce como operadores de corto circuitos, donde tenemos el && y el ||
// (a && b) si a es true se retorna b
// (a || b) si a es false se retorna b, sino se retorna a

//con arrays, los arrays empiezan con su indice en 0
const diasLetras2 = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado',];
console.log( diasLetras2[dia] );
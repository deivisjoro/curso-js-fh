//acepta valores exactos, como enteros, string, siempre que se pueda utilizar el === se puede utilizar el switch

const dia = 2; // 0: Domingo

switch (dia) {
  //case '0': no funcionaria, porque el switch hace la comparacion estricta
  case 0:
    console.log("Domingo");
    break; //sino colocamos el break seguira ejecutando el switch y entrara a los demas casos
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  default:
    console.log("No es lunes, martes o domingo");
    break; //este ultimo break no es necesario
}

//multiples opciones forma 1
switch (dia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Es dia de semana");
    break;

  default:
    console.log("Es fin de semana");
    break;
}

//multiples opciones forma 2
switch (true) {
  case [1, 2, 3, 4, 5].includes(dia):
    console.log("Es dia de semana");
    break;

  default:
    console.log("Es fin de semana");
    break;
}

//multiples opciones forma 3
switch (true) {
  case [1, 2, 3, 4, 5].indexOf(dia) !== -1:
    console.log("Es dia de semana");
    break;

  default:
    console.log("Es fin de semana");
    break;
}

console.log({ dia });

/*

 hay muchas formas

var i = 3
switch (i) {
    case ((i>=0 && i<=5) ? i : -1):
        console.log('0-5');
        break;

    case 6: console.log('6');
}


var varName = "afshin"
switch (varName) {
    case (["afshin", "saeed", "larry"].indexOf(varName)+1 && varName):
      console.log("hey");
      break;

    default:
      console.log('Default case');
}


switch (varName)
{
   case ["afshin", "saeed", "larry"].find(firstName => firstName === varName):
       alert('Hey');
       break;

   default:
       alert('Default case');
       break;
}


function isAccessible(varName){
    let accessDenied = ['Liam', 'Noah', 'William', 'James', 'Logan', 'Benjamin',
                        'Mason', 'Elijah', 'Oliver', 'Jacob', 'Daniel', 'Lucas'];
    switch (varName) {
        case (accessDenied.includes(varName) ? varName : null):
            return 'Access Denied!';
        default:
           return 'Access Allowed.';
    }
}
console.log(isAccessible('Liam'));


const names = {
    afshin: 'afshin',
    saeed: 'saeed',
    larry: 'larry'
};

switch (varName) {
   case names[varName]: {
       alert('Hey');
       break;
   }

   default: {
       alert('Default case');
       break;
   }
}


*/

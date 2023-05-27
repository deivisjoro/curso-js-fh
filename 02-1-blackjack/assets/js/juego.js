/**
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamante)
 * 2H = Two of Hearts (Corazon)
 * 2S = Two of Spades (Espada o corazon negro) * 
 */

let baraja       = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A'];

let puntosJugador     = 0,
    puntosComputadora = 0;

//Referencias del DOM
const $btnPedir             = document.querySelector('#btnPedir');
const $btnDetener           = document.querySelector('#btnDetener');
const $btnNuevo             = document.querySelector('#btnNuevo');
const $spanPuntos           = document.querySelectorAll('.tablero small span');
const $divJugadorCartas     = document.querySelector('#jugador-cartas');
const $divComputadoraCartas = document.querySelector('#computadora-cartas');

const crearBaraja = ()=>{  
    const cartas = [];  
    for (let tipo of tipos) {        
        for (let i = 2; i <= 10; i++) {
            cartas.push(`${i+''+tipo}`);      
        }
        for (let especial of especiales) {
            cartas.push(`${especial+''+tipo}`);    
        } 
    } 
    //en este punto el mazo esta construido, pero esta con las cartas ordenadas, necesitamos barajar, podemos hacerlo manual con un algoritmo propio o una funcion de alguna libreria como underscore que tiene una funcion que baraja los elementos de un array
    return _.shuffle(cartas);
};

baraja = crearBaraja();
console.log(baraja);

const pedirCarta = ()=>{
    //return (baraja.length===0) ? null : baraja.pop();
    if(baraja.length === 0) throw 'No hay cartas en la baraja';

    return baraja.pop();
};

const valorCarta = (carta)=>{
    const valor = carta.substring(0, carta.length - 1);
    //console.log({valor});
    return (isNaN(valor)) ? ((valor==='A') ? 11 : 10) : Number(valor);
};

// console.log(valorCarta('KD'));
// console.log(valorCarta('JD'));
// console.log(valorCarta('AD'));
// console.log(valorCarta('5D'));
// console.log(valorCarta('2D'));
// console.log(valorCarta('10D'));

//console.log(valorCarta(pedirCarta()));

const dibujarTurno = (contenedor, jugador)=>{
    const carta = pedirCarta();
    //<img class="carta" src="assets/cartas/4H.png" alt="imagen de carta"></img>
    const $imgCarta = document.createElement('img');
    $imgCarta.src = `assets/cartas/${carta}.png`; 
    $imgCarta.classList.add('carta');
    $imgCarta.alt = 'imagen de carta';

    contenedor.appendChild($imgCarta);

    if(jugador===0){
        puntosJugador += valorCarta(carta);
    }
    else{
        puntosComputadora += valorCarta(carta);
    }
    let puntaje = (jugador===0) ? puntosJugador : puntosComputadora;
    $spanPuntos[jugador].textContent = puntaje;       
};

const juegaComputadora = ()=>{

    do{
        dibujarTurno($divComputadoraCartas, 1);
    }while((puntosComputadora<puntosJugador) && (puntosJugador<=21));

         
    if(puntosComputadora===puntosJugador){
        alert('Ninguno ha ganado');            
    }
    else if(puntosComputadora>21){
        alert(`El jugador ha ganado con ${puntosJugador} puntos`);    
    }
    else{
        alert(`La computadora ha ganado con ${puntosComputadora} puntos`);
    }
};

//Eventos
$btnDetener.disabled = true;
$btnPedir.addEventListener('click', (e)=>{
    if(btnDetener.disabled){
        btnDetener.disabled = false;
    }
    
    dibujarTurno($divJugadorCartas, 0);

    if(puntosJugador>=21){
        $btnPedir.disabled = true;
        $btnDetener.disabled = true;   
        juegaComputadora();
    }

});

$btnDetener.addEventListener('click', (e)=>{
    $btnPedir.disabled = true;
    $btnDetener.disabled = true;   
    juegaComputadora(); 
});

$btnNuevo.addEventListener('click', (e)=>{
    console.clear();
    $btnPedir.disabled = false;
    $btnDetener.disabled = true;  
    baraja = crearBaraja();
    console.log(baraja);
    puntosJugador     = 0;
    puntosComputadora = 0;
    $divJugadorCartas.innerHTML = '';
    $divComputadoraCartas.innerHTML = '';
    $spanPuntos[0].textContent = 0;
    $spanPuntos[1].textContent = 0;
    
});

import _ from 'underscore';
import './styles.css';

const juego = (()=>{
  'use strict'

  let baraja       = [];
  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['J', 'Q', 'K', 'A'];

  let puntosJugadores = [],
      turnoActual = 0;

  const $btnPedir         = document.querySelector('#btnPedir'),
        $btnDetener       = document.querySelector('#btnDetener'),
        $btnNuevo         = document.querySelector('#btnNuevo'),
        $spanPuntos       = document.querySelectorAll('.tablero small span'),
        $divCartasJugadores = document.querySelectorAll('[id^="cartas-jugador-"]');

  const inicializarJuego = (numJugadores = 2)=>{
      baraja = crearBaraja();
      puntosJugadores = [];
      turnoActual = 0;
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
          $spanPuntos[i].textContent = 0;
          $divCartasJugadores[i].innerHTML = '';
      }

      $btnPedir.disabled = false;
      $btnDetener.disabled = true; 
  };

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
      return _.shuffle(cartas);
  };

  const pedirCarta = ()=>{
      if(baraja.length === 0) throw 'No hay cartas en la baraja';
      return baraja.pop();
  };

  const valorCarta = (carta)=>{
      const valor = carta.substring(0, carta.length - 1);
      return (isNaN(valor)) ? ((valor==='A') ? 11 : 10) : Number(valor);
  };

  const acumularPuntos = (turno, carta)=>{
      puntosJugadores[turno] += valorCarta(carta); 
      $spanPuntos[turno].textContent = puntosJugadores[turno];
  };

  const dibujarTurno = (jugador, carta)=>{        
      const $imgCarta = document.createElement('img');
      $imgCarta.src = `assets/cartas/${carta}.png`; 
      $imgCarta.classList.add('carta');
      $imgCarta.alt = 'imagen de carta';
      $divCartasJugadores[jugador].appendChild($imgCarta);              
  };

  const determinarGanador = ()=>{
      if(puntosJugadores[turnoActual]===puntosJugadores[turnoActual-1]){
          alert('Ninguno ha ganado');            
      }
      else if(puntosJugadores[turnoActual]>21){
          alert(`El jugador ha ganado con ${puntosJugadores[turnoActual-1]} puntos`);    
      }
      else{
          alert(`La computadora ha ganado con ${puntosJugadores[turnoActual]} puntos`);
      }
  };

  const juegaComputadora = ()=>{

      do{
          const carta = pedirCarta();
          acumularPuntos(turnoActual, carta); 
          dibujarTurno(turnoActual, carta);
          
      }while((puntosJugadores[turnoActual]<puntosJugadores[turnoActual-1]) && (puntosJugadores[turnoActual-1]<=21));

          
      determinarGanador();
  };

  //Eventos
  $btnDetener.disabled = true;
  $btnPedir.addEventListener('click', (e)=>{
      if(btnDetener.disabled){
          btnDetener.disabled = false;
      }

      const carta = pedirCarta();
      acumularPuntos(turnoActual, carta); 
      dibujarTurno(turnoActual, carta);

      if(puntosJugadores[turnoActual]>=21){
          $btnPedir.disabled = true;
          $btnDetener.disabled = true; 
          turnoActual++;  
          juegaComputadora();
      }

  });

  $btnDetener.addEventListener('click', (e)=>{
      $btnPedir.disabled = true;
      $btnDetener.disabled = true; 
      turnoActual++;  
      juegaComputadora(); 
  });

  $btnNuevo.addEventListener('click', (e)=>{ 
      inicializarJuego();   
  });

  inicializarJuego();

  return {
      inicializarJuego
  }
})();


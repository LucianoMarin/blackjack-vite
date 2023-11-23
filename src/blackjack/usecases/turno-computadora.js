
import { pedirCarta, valorCarta, crearCarta } from '../usecases';


/**
* @param {array} deck
* @param {String} puntosMinimos
* @param {String} puntosHTML
* @param {String} divCartasComputadora
*/


export const turnoComputadora = (deck = [], puntosMinimos, puntosHTML, divCartasComputadora) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        crearCarta(carta, divCartasComputadora);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}

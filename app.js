let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(numeroSecreto);
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

 console.log(listaDeNumerosSorteados);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto ) {
            asignarTextoElemento('p','El número secreto es menor');

        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; 
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function nuevoJuego(){
    condicionesIniciales();
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaDeNumerosSorteados.legth == numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles perra');
     } else {
    
         if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
              } else {
                 listaDeNumerosSorteados.push(numeroGenerado);
                  return numeroGenerado;
         }
     }


}


function atualizar() {
    let display =  document.querySelector('.display');

    let hora = new Date();
    
    let horario = corrigir(hora.getHours()) + ':' + corrigir(hora.getMinutes()) + ':' + corrigir(hora.getSeconds());
    
    display.textContent = horario;

}

function corrigir(numero){
    if (numero < 10) {
        numero = '0' + numero;
    }

    return numero;
}

atualizar(); 
setInterval(atualizar, 1000);

console.log(horario);
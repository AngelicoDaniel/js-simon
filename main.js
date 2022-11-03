// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let simon = document.getElementById('simon-says')
let simonNumbers = [];
let simonNumber


for (let i = 0; i < 5; i++){
    simonNumber = getRandomInt(1, 100)
    console.log(simonNumber)
    simonNumbers.push(simonNumber)
}
//console.log(simonNumbers)
simon.innerText = simonNumbers



//funzione principale
setTimeout(game, 41000)
function game(){
    let userNumbers = [];
    for (i = 0; i < 5; i++){
        let userNumber = prompt('simon says?')
        userNumbers.push(userNumber)
    }
    console.log(userNumbers)
    console.log(simonNumbers)
}


//numeri scompaiono dopo 4 secondi
setTimeout(none, 40000)
function none(){
    simon.style.display = 'none';
}


//funzione numero random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const kilometriPercorsi = parseFloat(prompt('quanti kilometri vuoi fare ?'));
const age = parseInt(prompt('Età del passeggero'));
const costoBiglietto = kilometriPercorsi * 0.21  ;


let percentualesconto = 0;
const minorenne = 18;
const over = 65;
let sconto = 0;
let messaggio;

if((age < minorenne)){

  percentualesconto = 20;
}

 else if(age > over ){

 percentualesconto = 40;

}

sconto = costoBiglietto * percentualesconto / 100;
messaggio = (costoBiglietto - sconto).toFixed(2) + " €";

document.getElementById("output").innerHTML = messaggio;


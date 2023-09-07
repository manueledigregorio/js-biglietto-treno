const kilometriPercorsi = parseFloat(prompt('quanti kilometri vuoi fare ?'));
const age = parseInt(prompt('Età del passeggero'));
const costoBiglietto = kilometriPercorsi * 0.21  ;

const minorenne = 18;
const over = 65;
let sconto;
let messaggio;

if((age < minorenne)){
  sconto = costoBiglietto * 20 / 100;

  messaggio = (costoBiglietto - sconto).toFixed(2) + " €";

}

 else if(age > over ){

  sconto = costoBiglietto * 40 / 100;

  messaggio = (costoBiglietto - sconto).toFixed(2) + " €";

}

else{
  messaggio = costoBiglietto.toFixed(2) + " €";
}



document.getElementById("output").innerHTML = messaggio;


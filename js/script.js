
let percentualesconto;
const minorenne = 18;
const over = 65;
let sconto = 0;
let messaggio;
let insertok = true ;

const kilometriPercorsi = parseFloat(prompt('quanti kilometri vuoi fare ?'));
const age = parseInt(prompt('Età del passeggero'));
const costoBiglietto = kilometriPercorsi * 0.21  ;

if(isNaN(kilometriPercorsi)|| isNaN(age)){
  insertok = false ;
  messaggio = "Errore! dati non corretti!";

   
    //SE NON è UN NUMERO ALLORA è FALSO
}

if(insertok){

  if((age < minorenne)){

    percentualesconto = 20;
    sconto = costoBiglietto * percentualesconto / 100;
  }
  
   else if(age > over ){
  
   percentualesconto = 40;
   sconto = costoBiglietto * percentualesconto / 100;
  
  }
  messaggio = (costoBiglietto - sconto).toFixed(2) + " €";

}

document.getElementById("output").innerHTML = messaggio;


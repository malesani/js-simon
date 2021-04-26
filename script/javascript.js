
$(document).ready(function() {
//clickare e generare 5 numeri

var numGenerati = [];

var numScriti = [];

var risultato ;



//genero i 5 numeri del computer
$("#stard").click(function(){
  $(this).hide();
  while(numGenerati.length < 5){
    numGenerati.push(generatorNumber(1,100))
  }

  //stampo i numeri 
  stampa(numGenerati.toString(),"#numeri_computer")

  //nascondi i numeri generati
  setTimeout(function(){
    stampa('Indovina i 5 numeri', '#numeri_computer');
    $('#user').show();
  }, 5000);
})



while(numGenerati.length > numScriti.length){
  $("#invia").click(function(){
    numScriti.push($("#num_user").val())
    console.log(numScriti)
  })
}

console.log(numScriti)







//funzioni//
function generatorNumber(min, max){
  return Math.floor(Math.random()*(max - min + 1)+min);
}

//stampa scritte//
function stampa(text, target){
  $(target).text(text);
}

});

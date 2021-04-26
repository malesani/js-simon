
$(document).ready(function() {
//clickare e generare 5 numeri

  var numGenerati = [];

  var numScriti = [];

  var risultato = [] ;



  //genero i 5 numeri del computer
  $("#stard").click(function(){ 
    $(this).hide();
    while(numGenerati.length < 5){
      numGenerati.push(generatorNumber(1,100))
    }

    //stampo i numeri generati
    stampa(numGenerati.toString(),"#numeri_computer")

    //nascondi i numeri generati
    setTimeout(function(){
      stampa('Indovina i 5 numeri', '#numeri_computer');
      $('#user').show();
    }, 5000);
  })


  $("#invia").click(function(){
    var valor_numero_user = parseInt($("#num_user").val())

    if(numGenerati.length != numScriti.length){
      numScriti.push(valor_numero_user);
      parseInt($("#num_user").val(""))

    }if(numGenerati.includes(valor_numero_user)){
      risultato.push(valor_numero_user)
      
    }if(numGenerati.length === numScriti.length){
      $("#num_user").hide()
      $("#invia").hide()
      stampa("calcolando","#calcolando")

      //sostituzione del testo calcolando
      setTimeout(function(){
        if(risultato.length > 0){
          stampa(risultato,"#calcolando")
        }else{
          stampa("Hai perso, nessun numero indovinato!","#calcolando")
        }
      }, 1000);
    }

    

    console.log("numeros iguales", risultato)
    console.log('generati: ', numGenerati);
    console.log('scritti:', numScriti);
  })
    
  

  //funzioni//
  function generatorNumber(min, max){
    return Math.floor(Math.random()*(max - min + 1)+min);
  }

  //stampa scritte//
  function stampa(text, target){
    $(target).text(text);
  }

});

$(document).ready(function(){
   $('#ocultaComida').hide();
   $('#ocultaEnseres').hide();
})	


$(document).ready(function(){
    $('#comida').click(function() {
      $('#ocultaEnseres').hide();
      $('#ocultaComida').removeClass("ocultaComida");
      $('#ocultaComida').slideToggle("slow");

    });
})

$(document).ready(function(){
    $('#enseres').click(function() {
      $('#ocultaComida').hide();
      $('#ocultaEnseres').removeClass("ocultaEnseres");
      $('#ocultaEnseres').slideToggle("slow");
    });
})



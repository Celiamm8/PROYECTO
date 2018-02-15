$(document).ready(function() {
    // $(".tercera,.segunda").css("display","none");
    $(".tercera").hide();
    $(".segunda").hide();
    $(".cuarta").hide();
    var contador = 0;
    $(".izquierda").click(function(){
      contador++;
      if (contador==1) {
        $(".primera").hide("slide");
        $(".segunda").show("slide");
      }else if (contador==2) {
        $(".segunda").hide("slide");
        $(".tercera").show("slide");

      }else if (contador==3) {
        $(".tercera").hide("slide");
        $(".cuarta").show("slide");
      }
      else if (contador>3) {
        $(".cuarta").hide("slide");
        $(".primera").show("slide");
        contador=0;
      }
    });
    $(".derecha").click(function(){
      contador++;
      if (contador==1) {
        $(".primera").hide();
        $(".segunda").show("slide");
      }else if (contador==2) {
        $(".segunda").hide();
        $(".tercera").show("slide");

      }else if (contador==3) {
        $(".tercera").hide();
        $(".cuarta").show("slide");
      }
      else if (contador>3) {
        $(".cuarta").hide();
        $(".primera").show("slide");
        contador=0;
      }
    });
});

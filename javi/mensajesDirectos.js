$(document).ready(function(){
    $('#mensajeInferior').text('140 caracteres maximo');
    $('#mensaje').keyup(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#mensajeInferior').text('Has alcanzado el limite');
            $('#mensajeInferior').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#mensajeInferior').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#mensajeInferior').removeClass('red');
        }
    });
});

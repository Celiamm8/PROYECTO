function mute(){
      var sonido = document.getElementById('player').muted;
      if (sonido === true){
        document.getElementById('player').muted = false;
      }else{
        document.getElementById('player').muted = true;
      }
    }
    function camb(){
      var cancion = document.getElementsByTagName('source');
      if(cancion.src=="audio/SOUNDPROOF.ogg" || cancion.src=="audio/SOUNDPROOF.mp3"){
        document.getElementsByTagName('source')[0].src = "audio/VORTTEX.ogg";
        document.getElementsByTagName('source')[1].src = "audio/VORTTEX.mp3";
      }
      if(cancion.src=="audio/VORTTEX.ogg" || cancion.src=="audio/VORTTEX.mp3"){
        document.getElementsByTagName('source')[0].src = "audio/SOUNDPROOF.ogg";
        document.getElementsByTagName('source')[1].src = "audio/SOUNDPROOF.mp3";
      }
    }

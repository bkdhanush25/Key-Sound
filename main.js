document.addEventListener('keydown',function(e){
    var a=document.getElementById('a');
    var kc=e.keyCode;
    switch(kc){
        case 65:
            var audio=new Audio('audio/boom.wav');
            audio.play();
            a.innerHTML="A";
            break;
        case 83:
            var audio=new Audio('audio/clap.wav');
            audio.play();
            a.innerHTML="S";
            break;    
        case 68:
            var audio=new Audio('audio/hihat.wav');
            audio.play();
            a.innerHTML="D";
            break;
        case 70:
            var audio=new Audio('audio/kick.wav');
            audio.play();
            a.innerHTML="F";
            break;
        case 71:
            var audio=new Audio('audio/openhat.wav');
            audio.play();
            a.innerHTML="G";
            break;
        case 72:
            var audio=new Audio('audio/ride.wav');
            audio.play();
            a.innerHTML="H";
            break;
        case 74:
            var audio=new Audio('audio/snare.wav');
            audio.play();
            a.innerHTML="J";
            break;    
        case 75:
            var audio=new Audio('audio/tink.wav');
            audio.play();
            a.innerHTML="K";
            break;
        case 76:
            var audio=new Audio('audio/tom.wav');
            audio.play();
            a.innerHTML="L";
            break;

    }

})
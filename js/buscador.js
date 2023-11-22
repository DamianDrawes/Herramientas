const icon=document.querySelector("#iconB");
function abrir(){
    var boton=document.getElementById("navBusc");
    boton.style.transition="all 0.3s";
    if(boton.classList.contains("close")){
        boton.style.height="70px";
        boton.classList.remove("close");
        boton.classList.add("open");
    }
    else{
        boton.classList.remove("open");
        boton.classList.add("close");
        boton.style.height="0px";
    }
}
icon.addEventListener('click',function(){
    abrir();
});
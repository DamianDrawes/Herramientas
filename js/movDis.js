const contenedor=document.querySelector("#conteiner");
let seleccion=document.querySelectorAll(".divlis");
let seleccionFin=seleccion[seleccion.length-1];
contenedor.insertAdjacentElement("afterbegin",seleccionFin);
const btnIz=document.querySelector("#izq");
const btnDr=document.querySelector("#der");
function movD(){
    let seleccionIni=document.querySelectorAll(".divlis")[0];
    contenedor.style.marginLeft="-200%";
    contenedor.style.transition="all 0.5s";
    setTimeout(function(){
        contenedor.style.transition="none";
        contenedor.insertAdjacentElement("beforeend",seleccionIni);
        contenedor.style.marginLeft="-100%";
    },500);
}
function movI(){
    let seleccion=document.querySelectorAll(".divlis");
    let seleccionFin=seleccion[seleccion.length-1];
    contenedor.style.marginLeft="0";
    contenedor.style.transition="all 0.5s";
    setTimeout(function(){
        contenedor.style.transition="none";
        contenedor.insertAdjacentElement("afterbegin",seleccionFin);
        contenedor.style.marginLeft="-100%"; 
    },500);
}

btnDr.addEventListener('click',function(){
    movD();
});
btnIz.addEventListener('click',function(){
    movI();
});
setInterval(function(){
    movD();
},8000);


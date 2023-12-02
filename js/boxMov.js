const BoxConteiner=document.querySelector("#box");
const boxIz=document.querySelector("#Bizq");
const boxDr=document.querySelector("#Bder");
function BoxmovD(){
    let productoIni=document.querySelectorAll(".boxProducto")[0];
    BoxConteiner.style.marginLeft="-440px";
    BoxConteiner.style.transition="all 0.3s";
    setTimeout(function(){
        BoxConteiner.style.transition="none";
        BoxConteiner.insertAdjacentElement("beforeend",productoIni);
        BoxConteiner.style.marginLeft="-170px";
    },300);
}
function BoxmovI(){
    let producto=document.querySelectorAll(".boxProducto");
    let productoFin=producto[producto.length-1];
    BoxConteiner.style.marginLeft="100px";
    BoxConteiner.style.transition="all 0.3s";
    setTimeout(function(){
        BoxConteiner.style.transition="none";
        BoxConteiner.insertAdjacentElement("afterbegin",productoFin);
        BoxConteiner.style.marginLeft="-170px"; 
    },300);
}

boxDr.addEventListener('click',function(){
    BoxmovD();
});
boxIz.addEventListener('click',function(){
    BoxmovI();
});
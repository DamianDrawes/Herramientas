const producto=document.getElementById("productoButon");
const favorito=document.getElementById("favoritoButon");
function armarSeleccion(info){
    var miDiv = document.getElementById("boxP");
    miDiv.insertAdjacentHTML('beforeend',
        `<img id="principals" src="${info.imagen}">
        <div id="texdiv">
            <p>${info.nombre}</p>
            <hr>
            <p>CODIGO</p>
            <hr>
            <p>${info.precio}</p>
            <hr>
            <div class="ico">
                <img class="iconP" src="img/icon/escudo.png">
                <p> Garantía Oficial - 36 meses</p>
            </div>
            <div class="ico">
                <img class="iconP" src="img/icon/tick.png">
                <p>Stock disponible</p>
            </div>
            <div class="ico">
                <img class="iconP" src="img/icon/envio.png">
                <p>Envíos a todo el país</p>
            </div>
        </div>
    </div>`);
};
function borrarP(){
    var contenedor2 = document.getElementById('boxP');
    while (contenedor2.firstChild) {
      contenedor2.removeChild(contenedor2.firstChild);
    }
}
function movD(){
    var contenerdor=document.getElementById("conteinerbox");
    let visible=document.getElementById("visible");
    let box=document.getElementById("boxF");
    let rect = box.getBoundingClientRect();
    let alto = (rect.height)+400;
    visible.style.height = alto + "px";
    contenerdor.style.marginLeft="-100%";
    producto.innerText="<";
    favorito.innerText="Favoritos";
}
function movI(){
    var contenerdor=document.getElementById("conteinerbox");
    let visible=document.getElementById("visible");
    visible.style.height="auto";
    contenerdor.style.marginLeft="0";
    producto.innerText="Productos";
    favorito.innerText="Favoritos";
}
function movP(){
    let prod=document.querySelectorAll(".producto");
    prod.forEach(function(elemento){
        elemento.addEventListener('click',function(event){
            var tick =event.target;
            var asd= tick.parentElement;
            console.log(asd);
            var info={
                "nombre":(asd.querySelector('.nombre').textContent),
                "precio":(asd.querySelector('.precio').textContent),
                "imagen":((asd.querySelector('.producto')).getAttribute('src'))
            };
            borrarP();
            armarSeleccion(info);
            let contenedor=document.getElementById("conteinerbox");
            let visible=document.getElementById("visible");
            let box=document.getElementById("boxP");
            let rect = box.getBoundingClientRect();
            let alto = (rect.height)+400;
            visible.style.height = alto + "px";
            contenedor.style.marginLeft="-200%";
            producto.innerText="<";
            favorito.innerText="☆";
        });
    });
}
producto.addEventListener('click',function(){
    movI();
});
favorito.addEventListener('click',function(){
    borrar();
    armar();
    ticks();
    movD();
    movP();
});

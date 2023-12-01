var nfavorito=document.querySelectorAll(".tickoff");
nfavorito.forEach(function(elemento) {
    elemento.addEventListener('click', function(event) {
        // Obtener el elemento clickeado
        var tick =event.target;
        var producto= tick.parentElement;
        var info={
            "nombre":(producto.querySelector('.nombre').textContent),
            "precio":(producto.querySelector('.precio').textContent),
            "imagen":((producto.querySelector('.producto')).getAttribute('src'))
        };
        if (tick.classList.contains("tickoff")) {
            tick.classList.remove("tickoff");
            tick.classList.add("tickon");
            if (localStorage.getItem("usuario") == null) {
                console.log("creado");
                let arreglo=[];
                arreglo.push(info);
                localStorage.setItem("usuario", JSON.stringify(arreglo));
            }
            else{
                var elementoLS = JSON.parse(localStorage.getItem("usuario"));
                var bool=0;
                elementoLS.forEach(function(validar){
                    if(Object.values(validar).includes(info.nombre)){
                        bool=1;
                    }
                });
                if(bool==1){
                    console.log("esta incluido");
                }
                else{
                    let arrayExistente = JSON.parse(localStorage.getItem("usuario")) || [];
                    arrayExistente.push(info);
                    localStorage.setItem('usuario', JSON.stringify(arrayExistente));

                }
            };
        }
        else{
            tick.classList.remove("tickon");
            tick.classList.add("tickoff");
            var elementoLS = JSON.parse(localStorage.getItem("usuario"));
                var bool=-1;
                elementoLS.forEach(function(validar){
                        bool=bool+1;
                    if(Object.values(validar).includes(info.nombre)){
                        elementoLS.splice(bool, 1);
                        localStorage.setItem('usuario', JSON.stringify(elementoLS));
                    }
                });
        }
    });
});

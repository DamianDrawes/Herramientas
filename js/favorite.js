let nfavorito=document.querySelectorAll(".tickoff");

nfavorito.forEach(function(elemento) {
    elemento.addEventListener('click', function(event) {
        // Obtener el elemento clickeado
        var tick =event.target;
        if (tick.classList.contains("tickoff")) {
            tick.classList.remove("tickoff");
            tick.classList.add("tickon");
        }
        else{
            tick.classList.remove("tickon");
            tick.classList.add("tickoff");
        }
    });
});
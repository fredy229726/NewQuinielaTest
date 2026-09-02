document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("miModal");
    const imgModal = document.getElementById("imgModal");
    const spanCerrar = document.querySelector(".cerrar");

    if (!modal) {
        console.error("¡Cuidado! No se encontró el elemento con id 'miModal'");
        return;
    }

    const imagenes = document.querySelectorAll('.imagen-zoom');
    console.log("Imágenes encontradas para el zoom:", imagenes.length); // Te dirá en la consola cuántas detectó

    imagenes.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "flex"; 
            imgModal.src = this.src;      
        });
    });

    if (spanCerrar) {
        spanCerrar.onclick = function() {
            modal.style.display = "none";
        }
    }

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
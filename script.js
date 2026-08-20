const btn = document.getElementById('button');

document.getElementById('form')

.addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Capturando...';

    const serviceID = 'default_service';
    const templateID = 'template_1ayuvjg';

    emailjs.sendForm(serviceID, templateID, this)
     .then(() => { 
        btn.value = 'CAPTURAR QUINIELA';
     
        Swal.fire ({
            title: '¡Quiniela Capturada!',
            text: 'Tus pronósticos han sido registrados. ¡Mucha suerte en esta jornada, Entrenador!',
            icon: 'success',
            background: '#2b2b2b',  
            color: '#ffffff',  
            confirmButtonColor: '#ff0000', 
            confirmButtonText: '¡Entendido!'
        });

     }, (err) => {
        btn.value = 'CAPTURAR QUINIELA'; 
 
        Swal.fire({
            title: 'Error de conexión',
            text: 'Ocurrió un problema al enviar la quiniela: ' + JSON.stringify(err),
            icon: 'error',
            background: '#2b2b2b',
            color: '#ffffff',
            confirmButtonColor: '#ff0000'
        });
    });
});
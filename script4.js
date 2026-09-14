// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm9qRPiM32Ygkg0ogfd97pPpOrPvOijqo",
  authDomain: "quinielalhp-294ba.firebaseapp.com",
  projectId: "quinielalhp-294ba",
  storageBucket: "quinielalhp-294ba.firebasestorage.app",
  messagingSenderId: "496770817079",
  appId: "1:496770817079:web:afc10d0ab6f2b4543533b2",
  measurementId: "G-F2BGVKSFH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const btn = document.getElementById('button');

btn.addEventListener('click', function() {
    btn.value = 'Capturando...';

    const seleccionBatalla1 = document.querySelector('input[name="ganador1"]:checked');
    const seleccionBatalla2 = document.querySelector('input[name="ganador2"]:checked');
    const seleccionBatalla3 = document.querySelector('input[name="ganador3"]:checked');
    const seleccionBatalla4 = document.querySelector('input[name="ganador4"]:checked');
    const seleccionBatalla5 = document.querySelector('input[name="ganador5"]:checked');
    const seleccionBatalla6 = document.querySelector('input[name="ganador6"]:checked');
    const seleccionBatalla7 = document.querySelector('input[name="ganador7"]:checked');
    const seleccionBatalla8 = document.querySelector('input[name="ganador8"]:checked');
    const nombreCapturado = document.getElementById('nombre').value;

    if (!seleccionBatalla1 || !seleccionBatalla2 || !nombreCapturado || 
        !seleccionBatalla3 || !seleccionBatalla4 || !seleccionBatalla5 || !seleccionBatalla6 || 
        !seleccionBatalla7 || !seleccionBatalla8) {
        btn.value = 'CAPTURAR QUINIELA';
        Swal.fire({
            title: '¡Faltan Datos!',
            text: 'Por favor, completa el formulario',
            icon: 'warning',
            confirmButtonColor: '#d33'
        })
        return;
    }

    const parametrosEmail = {
        nombre: nombreCapturado,
        ganador1: seleccionBatalla1.value,
        ganador2: seleccionBatalla2.value,
        ganador3: seleccionBatalla3.value,
        ganador4: seleccionBatalla4.value,
        ganador5: seleccionBatalla5.value,
        ganador6: seleccionBatalla6.value,
        ganador7: seleccionBatalla7.value,
        ganador8: seleccionBatalla8.value

    }

    addDoc(collection(db, "Pronosticos_Jornada1"), parametrosEmail)
    .then(() => {
        btn.value = 'CAPTURAR QUINIELA';
    
        Swal.fire({
            title: '¡Quiniela Capturada!',
            text: 'Tus pronósticos han sido registrados. ¡Mucha suerte en esta jornada, Entrenador!',
            icon: 'success',
            background: '#2b2b2b',
            color: '#ffffff',
            confirmButtonColor: '#ff0000',
            confirmButtonText: '¡Entendido!'
        });
    })
 
    .catch((err) => { 
        btn.value = 'CAPTURAR QUINIELA';

        Swal.fire({
            title: 'Error de conexión',
            text: 'Ocurrió un problema al enviar la quiniela.',
            icon: 'error',
            background: '#2b2b2b',
            color: '#ffffff',
            confirmButtonColor: '#ff0000'
        });
        console.log(err);
    });
});
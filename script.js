function toggleMenu() {
    const navList = document.getElementById('navList');
    navList.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const musicElement = document.querySelector('.music');
    const audioPlayer = document.getElementById('audio-player');

    musicElement.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    function actualizarContador() {
        const visitas = localStorage.getItem('contador_de_visitas');
        document.querySelector('.contador_de_visitas').innerText = 
            `Este sitio ha sido visitado ${visitas} veces.`;
    }

    if (!sessionStorage.getItem('visita_registrada')) {
        let visitas = localStorage.getItem('contador_de_visitas');
        
        if (!visitas) {
            visitas = 0;
        }
        
        visitas = parseInt(visitas) + 1;
        localStorage.setItem('contador_de_visitas', visitas);
        
        sessionStorage.setItem('visita_registrada', 'true');
        
        actualizarContador();
    } else {
        actualizarContador();
    }

    document.getElementById('resetButton').addEventListener('click', () => {
        localStorage.setItem('contador_de_visitas', 0);
        sessionStorage.removeItem('visita_registrada');
        actualizarContador();
    });
});

// Función para abrir el modal
function openModal(imageElement) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "flex"; // Muestra el modal
    modalImage.src = imageElement.src; 
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Oculta el modal
}

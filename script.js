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
    let visitas = sessionStorage.getItem('contador_de_visitas');

    if (!visitas) {
        visitas = 0;
    }

    visitas = parseInt(visitas) + 1;

    sessionStorage.setItem('contador_de_visitas', visitas);

    document.querySelector('.contador_de_visitas').innerText = `Este sitio ha sido visitado ${visitas} veces en esta sesión.`;
});

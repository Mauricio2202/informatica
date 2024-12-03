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

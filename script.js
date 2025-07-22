const audio = document.getElementById('audio');
const playButton = document.querySelectorAll('.player-control-icon')[2]; // the play icon (3rd one)
const progressBar = document.querySelector('.progress-bar');
const currTime = document.querySelector('.curr-time');
const totalTime = document.querySelector('.tot-time');

let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playButton.src = './assets/player_icon3.png'; // play icon
    } else {
        audio.play();
        playButton.src = './assets/pause_icon.png'; // replace with a pause icon if available
    }
    isPlaying = !isPlaying;
});

audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;

    currTime.textContent = formatTime(audio.currentTime);
    totalTime.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

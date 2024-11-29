function createMusicPlayer() {
    var audio = new Audio('assets/bg_music.mp3');
    audio.loop = true;
    audio.play();
    audio.volume = 0.5;
    return audio;
}

window.musicPlayer = createMusicPlayer();
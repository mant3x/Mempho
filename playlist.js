function addSong() {
    const songName = document.getElementById('songName').value;
    const songUrl = document.getElementById('songUrl').value;

    if (songName.trim() && songUrl.trim()) {
        const song = document.createElement('div');
        song.className = 'song';
        song.textContent = songName;
        song.dataset.url = songUrl;
        song.onclick = () => playSong(songUrl);
        document.querySelector('.playlist').appendChild(song);
        
        document.getElementById('songName').value = '';
        document.getElementById('songUrl').value = '';
    } else {
        alert('Будь ласка, заповніть всі поля');
    }
}

function playSong(url) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = url;
    audioPlayer.play();
}

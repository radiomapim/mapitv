let player;
const playlist = [
    {id: 'VIDEO_ID_1', title: 'Música 1'},
    {id: 'VIDEO_ID_2', title: 'Música 2'},
    // Adicione mais vídeos
];

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '480',
        width: '854',
        videoId: playlist[0].id,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    loadPlaylist();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        playNextVideo();
    }
}

function loadPlaylist() {
    const container = document.getElementById('playlist');
    playlist.forEach((video, index) => {
        const thumb = document.createElement('img');
        thumb.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
        thumb.onclick = () => player.loadVideoById(video.id);
        container.appendChild(thumb);
    });
}

function playNextVideo() {
    // Lógica para tocar o próximo vídeo
}

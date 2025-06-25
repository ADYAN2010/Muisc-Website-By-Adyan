const songList = [];
const YT_ID = 'dQw4w9WgXcQ'; // Placeholder ID, replace with real ones

for (let i = 1; i <= 100; i++) {
  songList.push({ title: `Song ${i}`, videoId: YT_ID });
}

function onYouTubeIframeAPIReady() {
  const container = document.getElementById('song-container');
  songList.forEach((song, index) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('music-card');

    const title = document.createElement('h3');
    title.innerText = song.title;

    const playerDiv = document.createElement('div');
    playerDiv.id = `player-${index}`;
    playerDiv.style.width = '100%';
    playerDiv.style.height = '250px';

    wrapper.appendChild(title);
    wrapper.appendChild(playerDiv);
    container.appendChild(wrapper);

    new YT.Player(playerDiv.id, {
      height: '250',
      width: '100%',
      videoId: song.videoId,
      playerVars: { 'autoplay': 0, 'controls': 1 }
    });
  });
}

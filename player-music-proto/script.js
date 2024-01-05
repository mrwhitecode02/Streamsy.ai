/**
 * Start coding JS
 */

let isPlaying = false;
let currentSongIndex = 0;

const songs = [
    {title: 'Save your Tears', artist: 'The wekend'},
    {title: 'Right Here Waiting', artist: 'Richard Marx'},
    {title: 'I like You', artist: 'Post Malone'}
];


function togglePlayPause() {
    const playPauseButton = document.getElementById('playPauseButton');
    isPlaying = !isPlaying;

    if (isPlaying) {
        playPauseButton.textContent = 'Pause';
        //add logic to play the current song...
        console.log('Playing:', songs[currentSongIndex].title);
    } else {
        playPauseButton.textContent = 'Play';
        //add logic to pause the current song...
        console.log('Pausing:', songs[currentSongIndex].title);
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongInfo();
        if (isPlaying) {
            //add logic to play new current song...
            console.log('Plaing:', songs[currentSongIndex].title);
        }
}

function nextSong () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongInfo();
        if (isPlaying) {
            //add logic to play the new current song...
            console.log('Playing:', songs[currentSongIndex].title);

        }
}

function updateSongInfo() {
    const songTitleElement = document.querySelector('.song-title');
    const artistElement = document.querySelector('.artist');

    songTitleElement.textContent = songs[currentSongIndex].title;
    artistElement.textContent = songs[currentSongIndex].title;
}

document.addEventListener('DOMContentLoaded', () => {
    updateSongInfo();
    setInterval(() => {
        //Simulate updating the progress bar or other time-relate features
        console.log('Updating Time-Related Features');
    }, 1000)
});

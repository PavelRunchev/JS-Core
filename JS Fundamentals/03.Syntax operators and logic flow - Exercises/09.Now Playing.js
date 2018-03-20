function  nowPlaying(array) {
    let track = array[0];
    let artist = array[1];
    let duration = array[2];
    return `Now Playing: ${artist} - ${track} [${duration}]`;
}

console.log(nowPlaying(['Number One', 'Nelly', '4:09']));
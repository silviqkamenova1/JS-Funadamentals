function solve(name, album, song) {
    let songDuration = (album.length * name.length) * song.length / 2

    let times = songDuration / 2.5
    console.log(`The plate was rotated ${Math.ceil(times)} times.`);


}
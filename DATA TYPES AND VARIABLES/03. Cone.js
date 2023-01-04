function cone(r, height) {
    let volume = (((1 / 3) * 3.1415926535898) * (Math.pow(r, 2))) * height;
    let area = 3.1415926535898 * r * (r + Math.sqrt(Math.pow(r, 2) + Math.pow(height, 2)))

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
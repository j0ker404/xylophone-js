// add audio tracks here
const sounds = [
    "/audio/OH1.mp3",
    "/audio/OH2.mp3",
    "/audio/OH3.mp3",
    "/audio/OH4.mp3",
    "/audio/OH5.mp3",
    "/audio/OH6.mp3",
    "/audio/OH7.mp3",
    "/audio/OH8.mp3",
]

// get audio player
let audio = document.getElementById("audio");


// get keys
keys = Array.prototype.slice.call( document.getElementsByClassName('key') )
// keys = [];
// let N = 8;
// for (let i= 0; i < N;i++) {
//     index = "key"+i
//     key = document.getElementById(index);
//     keys.push(key);
// }


// add event handlers
keys.forEach((element,index) => {

    element.addEventListener("click", ()=> {
        audio.src=sounds[index];
        audio.load()
        audio.play()
    })
});

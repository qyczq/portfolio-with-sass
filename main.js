let playing = false;
const audio = new Audio("music.mp3")

audio.addEventListener("ended", (event) => {
    playing = false
    document.querySelector(".playMusic").textContent="Click here to listen";
});

function playMusic() {
    if(playing == false){
        playing = true
        audio.currentTime = 0;
        audio.play();
        document.querySelector(".playMusic").textContent="Click here to pause";
    }
    else{
        audio.pause();
        playing = false
        document.querySelector(".playMusic").textContent="Click here to listen";
    }
}
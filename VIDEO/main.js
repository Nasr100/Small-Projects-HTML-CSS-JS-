let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let video = document.getElementById("myVideo");

playBtn.addEventListener('click',function(){
    video.play();
    playBtn.classList.add("btn-hide");
    pauseBtn.classList.remove("btn-hide");

})

pauseBtn.addEventListener('click',function(){
    video.pause();
    playBtn.classList.remove("btn-hide");
    pauseBtn.classList.add("btn-hide");

})
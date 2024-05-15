
window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".Banner");
    banner.style.backgroundImage = "url(images/spotify-banner2.png)";
   
  });
function playAll(songNumber){
   
    var audioElement=document.getElementById("song");
    var playbtn=document.getElementById("play-pause");
    var songFileName="music/"+songNumber+".mp3";
    var banner = document.querySelector(".Banner");
    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playbtn.innerHTML='<img src="images/play-button.svg">';
        banner.style.backgroundImage = "url(images/spotify-banner2.png)";

    }
    else{
    
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playbtn.innerHTML='<img src="images/pause-button (1).svg">';

        if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/naready.png)";
        } 
        
        else if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/hukum.png)";
        } 
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/hukum.png)";
        } 

        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/krk.png)";
        } 
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/loki.png)";
        } 
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/vikram.png)";
        } 
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/badass.png)";
        } 
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/mari.png)";
        } 
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/petta.png)";
        } 
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/jawan.png)";
        } 
    }    
}
function playAudio(){
    var audioElement=document.getElementById("song");
    var playbtn=document.getElementById("play-pause");
    if(audioElement.paused){
        audioElement.play();
        playbtn.innerHTML='<img src="images/pause-button (1).svg">';
    }
    else{
        audioElement.pause();
        playbtn.innerHTML='<img src="images/play-button.svg">';
    }

}
export default class Sound {
  constructor(src, loop = false, className = ''){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("class", className);
    this.sound.style.display = "none";

    if (loop) this.sound.setAttribute("loop", true);
    document.body.appendChild(this.sound);
  }
  play(){
    this.sound.play();
  }
  stop(){
    this.sound.pause();
  }
}

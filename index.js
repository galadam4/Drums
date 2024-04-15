
var numberOfDrumButtons = document.querySelectorAll("button").length;
for(var i = 0; i < numberOfDrumButtons; i++){
  //waits for clicks
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

//waits for a key press
document.addEventListener("keydown",function (event){
  makeSound(event.key);
  buttonAnimation(event.key);
});


//this function creates the sound, based on what key was pressed or clicked
function makeSound(key){
  switch (key) {
    case "w":

      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kickBass = new Audio('./sounds/kick-bass.mp3');
      kickBass.play();
      break;
    case "s":
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;
    case "d":
    var tom1 = new Audio('./sounds/tom-1.mp3');
    tom1.play();
    break;
    case "j":
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    default:  console.log(this.innerHTML);
  }
}
//adding animation to the drums after a click/keystroke
function buttonAnimation(key){
  activeButton = document.querySelector("." + key);
  activeButton.classList.toggle("pressed");

  //this basically creates a delay, so the light turns on and off and creates an animation
  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  }, 100);

}


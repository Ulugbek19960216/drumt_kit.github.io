let numberOfDrumButtons = document.querySelectorAll(".drum").length

for(let i = 0; i < numberOfDrumButtons; ++i) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
    });

}

document.addEventListener("keypress", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})




 function makeSound(key) {
    switch (key) {
        case "w":
            let audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            let audio1 = new Audio('sounds/kick-bass.mp3');
            audio1.play();
            break;
        case "s":
            let audio2 = new Audio('sounds/snare.mp3');
            audio2.play();
            break;
        case "d":
            let audio3 = new Audio('sounds/tom-1.mp3');
            audio3.play();
            break;
        case "j":
            let audio4 = new Audio('sounds/tom-2.mp3');
            audio4.play();
            break;
        case "k":
            let audio5 = new Audio('sounds/tom-3.mp3');
            audio5.play();
            break;
        case "l":
            let audio6 = new Audio('sounds/tom-4.mp3');
            audio6.play();
            break;    
        default:
            break;
    }
 }


 function buttonAnimation (currentKey) {
   let current =  document.querySelector("." + currentKey);
   current.classList.add("pressed");

   setTimeout(function() {
    current.classList.remove("pressed");
}, 100)
 }

// function HouseKeeper (yearsOfExperience, name, cleaningRepretoire) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepretoire = cleaningRepretoire;
//     this.clean = function () {
//         alert("Cleaning in progress");
//     }
// }

// const houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom","kitchen"]);

// houseKeeper1.clean();
// let audio = new Audio('sounds/tom-1.mp3');
// audio.play();



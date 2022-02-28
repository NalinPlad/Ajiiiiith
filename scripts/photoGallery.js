//  DOM Objects
let showcaseImg = document.getElementById("showcase");
let showButton = document.getElementById("showcaseButton")

// Images
let source = "/resources/portfolioShow/photo_";
let maxFile = 32;

// Helping variables :) wow they are so nice
let original = showButton.innerHTML;
let messages = [" // Loading...", " // Still Loading...", " // Loading some more...", " // That hurts :(", " // Im Loading as fast as I can", " // ⏱️"]
let place = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function showcaseSwitch() {
    showcaseImg.classList.remove('showcase-enter');
    showcaseImg.classList.add('showcase-leave');
    
    showButton.innerHTML += messages[place];
    if(place < messages.length-1) place++;

    setTimeout(() => {
        showcaseImg.style.visibility = "hidden";
        
        let newIm = source + (getRandomInt(maxFile)+1) + ".jpg";
        showcaseImg.src = newIm;
        console.log(newIm)

        showcaseImg.onload = () => {
            showcaseImg.style.visibility = "visible";
            showcaseImg.classList.remove('showcase-leave');
            showcaseImg.classList.add('showcase-enter');

            showButton.innerHTML = original;
            place = 0;
        }
    },1000);
}
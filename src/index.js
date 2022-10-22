/* girls.js - Interaktywna Galeria
 * Plik gallery.js
 * Tutaj będziemy dodawać nasz kod.
 */

document.querySelector("#pin1").classList.add("selected");

let currentNumber = 1;
let playing = false;
let interval;

function showSlide1() {
  showSlide(1);
}

function showSlide2() {
  showSlide(2);
}

function showSlide3() {
  showSlide(3);
}

function showSlide4() {
  showSlide(4);
}

function showSlide5() {
  showSlide(5);
}

function showSlide(number) {
  document.querySelector(".show").classList.remove("show");
  document.querySelector("#slide" + number).classList.add("show");
  selectPin(number);
  currentNumber = number;
}

function selectPin(newNumber) {
  document.querySelector(".selected").classList.remove("selected");
  document.querySelector("#pin" + newNumber).classList.add("selected");
}

for (let nrPin = 1; nrPin <= 5; nrPin++) {
  document.querySelector("#pin" + nrPin).addEventListener("click", function () {
    showSlide(nrPin);
  });
}
function playButtonClicked() {
  if (playing === false) {
    startSlideShow();
  } else {
    stopSlideShow();
  }
}

function startSlideShow() {
  document.querySelector("#play").classList.add("on");
  playing = true;
  interval = setInterval(showNextSlide, 2000);
}

function stopSlideShow() {
  document.querySelector("#play").classList.remove("on");
  playing = false;
  clearInterval(interval);
}

document.querySelector("#play").addEventListener("click", playButtonClicked);

//document.querySelector("#pin1").addEventListener("click", showSlide1);
//document.querySelector("#pin2").addEventListener("click", showSlide2);
//document.querySelector("#pin3").addEventListener("click", showSlide3);
//document.querySelector("#pin4").addEventListener("click", showSlide4);
//document.querySelector("#pin5").addEventListener("click", showSlide5);

function showNextSlide() {
  let newNumber = currentNumber + 1;
  if (newNumber > 5) {
    newNumber = 1;
  }
  showSlide(newNumber);
}
function showPreviousSlide() {
  let newPreviousNumber = currentNumber - 1;
  if (newPreviousNumber < 1) {
    newPreviousNumber = 5;
  }
  showSlide(newPreviousNumber);
}
document.querySelector("#next").addEventListener("click", showNextSlide);
document.querySelector("#prev").addEventListener("click", showPreviousSlide);

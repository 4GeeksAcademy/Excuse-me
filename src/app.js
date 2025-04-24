import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car', 'my computer'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch'];


function getRandom(anyArray) {
    return anyArray [Math.floor(Math.random() * anyArray.length)];
  }

window.onload = function () {
    console.log("Hello Rigo from the console!");
    document.querySelector('#excuse').innerHTML = getRandom(who) + " " + getRandom(action) + " " + getRandom(what) + " " + getRandom(when)
};


var userInput = [];

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//   1   red,
//   2   blue
//   3   green
//   4   dark orange
//   5   purple
//   6   yellow
//   7   deep pink
//   8   teal
//   9   brown

var round = 0;
//var arr = [randomNumber(1,9)];
var arr = [];



//var arr = [randomNumber(1,9),randomNumber(1,9), randomNumber(1,9), randomNumber(1,9),randomNumber(1,9), randomNumber(1,9), randomNumber(1,9),randomNumber(1,9), randomNumber(1,9)];


//var arr = [1,1, randomNumber(1,9), randomNumber(1,9),9, 9, randomNumber(1,9),randomNumber(1,9), randomNumber(1,9)];
console.log(arr);

var running = 0;


function start(){
  if(running == 0){
  
    arr.push(randomNumber(1,9));
    var index = arr.indexOf(1);
while(index > -1){
 //   if(arr[index-1] == "red"){
 //   arr[index] = "blue";
 //   index = arr.indexOf(1);
 //   }
  ////  else{
 // arr[index] = "red";
//  index = arr.indexOf(1);
 //   }
   arr[index] = "red";
  index = arr.indexOf(1);
}

var index = arr.indexOf(2);
while(index > -1){
  arr[index] = "blue";
  index = arr.indexOf(2);
}

var index = arr.indexOf(3);
while(index > -1){
  arr[index] = "green";
  index = arr.indexOf(3);
}

var index = arr.indexOf(4);
while(index > -1){
  arr[index] = "dark orange";
  index = arr.indexOf(4);
}

var index = arr.indexOf(5);
while(index > -1){
  arr[index] = "purple";
  index = arr.indexOf(5);
}

var index = arr.indexOf(6);
while(index > -1){
  arr[index] = "yellow";
  index = arr.indexOf(6);
}

var index = arr.indexOf(7);
while(index > -1){
  arr[index] = "deep pink";
  index = arr.indexOf(7);
}

var index = arr.indexOf(8);
while(index > -1){
  arr[index] = "teal";
  index = arr.indexOf(8);
}

var index = arr.indexOf(9);
while(index > -1){
  arr[index] = "brown";
  index = arr.indexOf(9);
}

console.log(arr);




var game1 = arr;

    
    var a = document.getElementById('r1c1');
    var b = document.getElementById('r1c2');
    var c = document.getElementById('r1c3');

    var d = document.getElementById('r2c1');
    var e = document.getElementById('r2c2');
    var f = document.getElementById('r2c3');

    var g = document.getElementById('r3c1');
    var h = document.getElementById('r3c2');
    var z = document.getElementById('r3c3');

    function a1(){
        a.style.background = "red";
    }

    function a2(){
        a.style.background = "repeating-linear-gradient(-45deg, red, red 5px, DarkGray 5px, DarkGray 10px)";
    }
    
    function a3(){
        a.style.background = "white";
    }
    
    function b1(){
        b.style.background = "blue";
    }
    function b2(){
        b.style.background = "repeating-linear-gradient(-45deg, blue, blue 5px, DarkGray 5px, DarkGray 10px)";
    }
    
    function c1(){
        c.style.background = "green";
    }

    function c2(){
        c.style.background = "repeating-linear-gradient(-45deg, green, green 5px, DarkGray 5px, DarkGray 10px)";
    }
    
    function d1(){
        d.style.background = "DarkOrange";
    }
    
    function d2(){
        d.style.background = "repeating-linear-gradient(-45deg, DarkOrange, DarkOrange 5px, DarkGray 5px, DarkGray 10px)";
    }
    
    function e1(){
        e.style.background = "purple";
    }

    function e2(){
        e.style.background = "repeating-linear-gradient(-45deg, purple, purple 5px, DarkGray 5px, DarkGray 10px)";
    }
    
    function f1(){
        f.style.background = "yellow";
    }
    
    function f2(){
        f.style.background = "repeating-linear-gradient(-45deg, yellow, yellow 5px, DarkGray 5px, DarkGray 10px)";
    }
    
    function g1(){
        g.style.background = "DeepPink";
    }
    
    function g2(){
        g.style.background = "repeating-linear-gradient(-45deg, DeepPink, DeepPink 5px, DarkGray 5px, DarkGray 10px)";
    }
    
    function h1(){
        h.style.background = "teal";
    }

    function h2(){
        h.style.background = "repeating-linear-gradient(-45deg, teal, teal 5px, DarkGray 5px, DarkGray 10px)";
    }
    
    function z1(){
        z.style.background = "brown";
    }
    
    function z2(){
        z.style.background = "repeating-linear-gradient(-45deg, brown, brown 5px, DarkGray 5px, DarkGray 10px)";
    }

    for(i = 0; i < game1.length; i++){
    if(game1[i] == "red"){
        setTimeout(() => { a1(); }, (2000 + (i * 1000)));
        setTimeout(() => { a2(); }, (2500 + (i * 1000)));
        //setTimeout(() => { a2(); }, (3000 + (i * 1000)));
    }
    if(game1[i] == "blue"){
        setTimeout(() => { b1(); }, (2000 + (i * 1000)));
        setTimeout(() => { b2(); }, (2500 + (i * 1000)));
    }
    if(game1[i] == "green"){
        setTimeout(() => { c1(); }, (2000 + (i * 1000)));
        setTimeout(() => { c2(); }, (2500 + (i * 1000)));
    }
    if(game1[i] == "dark orange"){
        setTimeout(() => { d1(); }, (2000 + (i * 1000)));
        setTimeout(() => { d2(); }, (2500 + (i * 1000)));
    }
    if(game1[i] == "purple"){
        setTimeout(() => { e1(); }, (2000 + (i * 1000)));
        setTimeout(() => { e2(); }, (2500 + (i * 1000)));
    }
    if(game1[i] == "yellow"){
        setTimeout(() => { f1(); }, (2000 + (i * 1000)));
        setTimeout(() => { f2(); }, (2500 + (i * 1000)));
    }
    if(game1[i] == "deep pink"){
        setTimeout(() => { g1(); }, (2000 + (i * 1000)));
        setTimeout(() => { g2(); }, (2500 + (i * 1000)));
    }
    if(game1[i] == "teal"){
        setTimeout(() => { h1(); }, (2000 + (i * 1000)));
        setTimeout(() => { h2(); }, (2500 + (i * 1000)));
    }
    if(game1[i] == "brown"){
        setTimeout(() => { z1(); }, (2000 + (i * 1000)));
        setTimeout(() => { z2(); }, (2500 + (i * 1000)));
    }
    }
    
    console.log(arr);
    round++;
    console.log("The current round of the game is: " + round);
    
    
    console.log(arr);


    /**
    setTimeout(() => { e1(); }, 1000);
    setTimeout(() => { e2(); }, 2000);
    setTimeout(() => { a1(); }, 2000);
    setTimeout(() => { a2(); }, 3000);
    setTimeout(() => { c1(); }, 3000);
    setTimeout(() => { c2(); }, 4000);
    setTimeout(() => { h1(); }, 4000);
    setTimeout(() => { h2(); }, 5000);
    */
    //setTimeout(() => { loopAgain(); }, 4000);
    
}
    running++;
}

function red(){
    console.log("red!");
    var x = document.getElementById('r1c1');
    x.style.background = "red";
    setTimeout(() => { x.style.background = "repeating-linear-gradient(-45deg, red, red 5px, DarkGray 5px, DarkGray 10px)"; }, 1000);
    userInput.push("red");
    checkWin();
}

function blue(){
    console.log("blue!");
    var x = document.getElementById('r1c2');
    x.style.background = "blue";
    setTimeout(() => { x.style.background = "repeating-linear-gradient(-45deg, blue, blue 5px, DarkGray 5px, DarkGray 10px)"; }, 1000);
    userInput.push("blue");
    checkWin();
}

function green(){
    console.log("green!");
    var x = document.getElementById('r1c3');
    x.style.background = "green";
    setTimeout(() => { x.style.background = "repeating-linear-gradient(-45deg, green, green 5px, DarkGray 5px, DarkGray 10px)"; }, 1000);
    userInput.push("green");
    checkWin();
}

function dOrange(){
    console.log("dark orange!");
    var x = document.getElementById('r2c1');
    x.style.background = "DarkOrange";
    setTimeout(() => { x.style.background = "repeating-linear-gradient(-45deg, DarkOrange, DarkOrange 5px, DarkGray 5px, DarkGray 10px)"; }, 1000);
    userInput.push("dark orange");
    checkWin();
}

function purple(){
    console.log("purple!");
    var x = document.getElementById('r2c2');
    x.style.background = "purple";
    setTimeout(() => { x.style.background = "repeating-linear-gradient(-45deg, purple, purple 5px, DarkGray 5px, DarkGray 10px)"; }, 1000);
    userInput.push("purple");
    checkWin();
}

function yellow(){
    console.log("yellow!");
    var x = document.getElementById('r2c3');
    x.style.background = "yellow";
    setTimeout(() => { x.style.background = "repeating-linear-gradient(-45deg, yellow, yellow 5px, DarkGray 5px, DarkGray 10px)"; }, 1000);
    userInput.push("yellow");
    checkWin();
}

function dPink(){
    console.log("deep pink!");
    var x = document.getElementById('r3c1');
    x.style.background = "DeepPink";
    setTimeout(() => { x.style.background = "repeating-linear-gradient(-45deg, DeepPink, DeepPink 5px, DarkGray 5px, DarkGray 10px)"; }, 1000);
    userInput.push("deep pink");
    checkWin();
}

function teal(){
    console.log("teal!");
    var x = document.getElementById('r3c2');
    x.style.background = "teal";
    setTimeout(() => { x.style.background = "repeating-linear-gradient(-45deg, teal, teal 5px, DarkGray 5px, DarkGray 10px)"; }, 1000);
    userInput.push("teal");
    checkWin();
}

function brown(){
    console.log("brown!");
    var x = document.getElementById('r3c3');
    x.style.background = "brown";
    setTimeout(() => { x.style.background = "repeating-linear-gradient(-45deg, brown, brown 5px, DarkGray 5px, DarkGray 10px)"; }, 1000);
    userInput.push("brown");
    checkWin();
}

//Source:https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
//Author: enyo Date:answered May 8 '13 at 9:22
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

/*function checkWin(){
    console.log(game1);
    console.log(userInput);
    if(arraysEqual(game1, userInput)){
        //alert("You Won!");
        document.getElementById("win").style = "display: ;";
    }
    else{
        document.getElementById("lost").style = "display: ;";
        //alert("You Lost!");
    }

}*/
function checkWin(){
/*if(arr.length == userInput.length){
    console.log(arr);
    console.log(userInput);
    if(arraysEqual(arr, userInput)){
        //alert("You Won!");
        document.getElementById("win").style = "display: ;";
    }
    else{
        document.getElementById("lost").style = "display: ;";
        //alert("You Lost!");
    }*/
    running = 0;
    if(arr[0] == undefined){
        console.log("No game running.. clearing input");
        userInput = [];
    }
    for(i = 0; i < userInput.length; i++){
    console.log(arr);
    console.log(userInput[i]);
    if(arr[i] != undefined && userInput[i] != undefined){
        console.log("1");
        if(arr[i] == userInput[i]){
            console.log("2");
            if(arr[i + 1] == undefined){
                console.log("max reached!");
                console.log(userInput);
                //document.getElementById("win").style = "display: ;";
                userInput = [];
                start();
            }
            else{
               //document.getElementById("win").style = "display: ;";
            }
        //alert("You Won!");
        //document.getElementById("win").style = "display: ;";
        //start();
        //userInput[i] = undefined;
        //console.log(userInput);
    }
    else{
        document.getElementById("lost").style = "display: ;";
        userInput = [];
        arr = [];
        //console.log(userInput);
        //alert("You Lost!");
    }

}
}}

function winButton(){
document.getElementById("win").style = "display:none;";
}

function lostButton(){
document.getElementById("lost").style = "display:none;";
}
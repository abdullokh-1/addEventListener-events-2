    //   7 dars



// setTimeout(() => {
// alert("time")

// }, 10000);

// setInterval(() => {
//     alert("interval time")
// }, 5000);


// const date = new Date();
// console.log(date.getHours(), date.getMinutes(), date.getSeconds());


// function updateTime() {
//     const now = new Date();
//     const timeString = now.toLocaleTimeString();
//     document.getElementById("time").innerText = timeString;
//   }

//   setInterval(updateTime, 1000);


// let progress = 0;
//   const progressBar = document.getElementById("progressBar");

//   const interval = setInterval(() => {
//     progress += ;
//     progressBar.value = progress;
//     if (progress === 100) {
//       clearInterval(interval);
//     }
//   }, 1000);



// MANIKI
// function updateTimer() {
//     const now = new Date(); 
//     const hours = String(now.getHours()).padStart(2, "0");
//       const  minutes = String(now.getMinutes()).padStart(2, "0");
//       const seconds = String(now.getSeconds()).padStart(2, "0");
//       document.getElementById("hours").textContent = hours;
//       document.getElementById("minutes").textContent = minutes;
//       document.getElementById("seconds").textContent = seconds;
// } 
// setInterval( updateTimer, 1000);
// updateTimer()



// USTOZNIKI
// function updateTimer() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2,'0')
//     const minutes = String(now.getMinutes()).padStart(2,'0')
//     const seconds = String(now.getSeconds()).padStart(2,'0')

// document.getElementById('hours').textContent = hours;
// document.getElementById('minutes').textContent = minutes;
// document.getElementById('seconds').textContent = seconds;
// }
// setInterval(updateTimer, 1000);
// updateTimer();




// CHATGPT NIKI
// function updateTimer() {
//     const now = new Date();
//     document.getElementById('hours').textContent = String(now.getHours()).padStart(2, '0');
//     document.getElementById('minutes').textContent = String(now.getMinutes()).padStart(2, '0');
//     document.getElementById('seconds').textContent = String(now.getSeconds()).padStart(2, '0');
// }

// setInterval(updateTimer, 1000);
// updateTimer();

// let count = 0;
// const countElement = document.getElementById("count");

// function increase() {
//     count++;
//     countElement.textContent = count;
// }

// function decrease() {
//     count--;
//     countElement.textContent = count;
// }

// function sendData() {
//     const userInput = document.getElementById("userInput").value;
//     if (!isNaN(userInput) && userInput !== "") {
//         count = parseInt(userInput);
//         countElement.textContent = count;
//     }
// }

// document.getElementById("color").addEventListener("input", (event) => {
//     countElement.style.color = event.target.value;
// });


// 8 DARS



// const knopka = document.querySelector("#btn");
// const knopka2 = document.querySelector("#btn1");
// console.log(knopka);

// knopka.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red"
// })

// knopka2.addEventListener("click", function(){
//     document.body.style.backgroundColor = "black"
// })




// const elForm = document.querySelector(".form");
// const elInput = document.querySelector(".input");
// const royxat = document.querySelector("#list");

// elForm.addEventListener("submit", (mars) =>{
//     mars.preventDefault();
//     const texts = document.createElement("li");
//     texts.textContent = elInput.value;

//     royxat.appendChild(texts);
//     elInput.value = "";
// } )


// const rang = document.getElementById("rang");
// rang.addEventListener("click", function (){
// rang.classList.toggle("on")    
// }); 


// const lamp = document.getElementById('lamp');

//         lamp.addEventListener('click', function () {
//             lamp.classList.toggle('on');
//         });





// const soz = document.getElementById("p");
// const kottabtn = document.getElementById("btn");
// const kichikbtn2 = document.getElementById("btn2");
// let fontSize = 32;


// btn.addEventListener("click", function() {
//     fontSize += 4;
//     text.style.fontSize = fontSize + "px"

// });

// btn2.addEventListener("click", function () {
// fontSize -= 4; 
// text.style.fontSize = fontSize +"px"
// });

// const text = document.getElementById('text');
//         const increaseBtn = document.getElementById('increase');
//         const decreaseBtn = document.getElementById('decrease');

//         let fontSize = 16;

//         increaseBtn.addEventListener('click', function () {
//             fontSize += 2;
//             text.style.fontSize = fontSize + 'px';
//         });

//         decreaseBtn.addEventListener('click', function () {
//             fontSize -= 2;
//             text.style.fontSize = fontSize + 'px';
//         });

let inputTag = document.querySelector("input");
let inputDiv = document.querySelector(".input-text");
function showInputText() {
 console.log(inputTag.value);
 inputDiv.textContent = inputTag.value;
 inputTag.value = "";
}

function minusNumber() {
    let inputNumber = inputDiv.textContent;
    -- inputNumber;
    inputDiv.textContent = inputNumber
}
function plusNumber() {
    let inputNumber = inputDiv.textContent
    ++inputNumber;
    inputDiv.textContent=inputNumber
}


let colorinp = document.querySelector(".color-inp");
let colorBtn = document.querySelector("color-btn");


function showColor() {
console.log(colorinp.value);
    document.body.style = "background-color:" + colorinp.value;
}
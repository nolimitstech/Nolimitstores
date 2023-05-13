////////////////////////
//IMPLEMENTING THE SLIDES

var section = document.querySelectorAll(".slider .section-two");
var dots = document.querySelectorAll(".dot");
var currentImg = 0; // index of the first image
const interval = 5000; // duration(speed) of the slide
var timer = setInterval(changeSlide, interval);
// const feedBackBox = document.querySelector(".comment");
// const searchFeedback = document.querySelector(".coment-p");
const navBtn = document.querySelector(".nav-btn");

function changeSlide(n) {
  for (var i = 0; i < section.length; i++) {
    // reset
    section[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(" active", "");
  }

  currentImg = (currentImg + 1) % section.length; // update the index number

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }
  // currentImg = n;

  section[currentImg].style.opacity = 1;
  dots[currentImg].className += " active";
}

///////////////////////////////////
////IMPLEMENTING THE SEARCH
const submit = document.querySelector(".btn-div");
const firstAnchor = document.querySelector("first");
const secondAnchor = document.querySelector("second");
const input1 = document.getElementById("firstNumber")[0];
//const placeholder = document.getElementById("firstNumber");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  // feedBackBox.style.opacity = '0';

  const input = document.querySelector(".firstN").value.toLowerCase();
  // input.textContent = '';
  if (input.includes("round")) {
    window.location = "t-shirt.html";
  } else if (input.includes("t-shirt")) {
    window.location = "t-shirt.html";
  } else if (input.includes("nicker")) {
    window.location = "shorts.html";
  } else if (input.includes("short")) {
    window.location = "shorts.html";
  } else if (input.includes("polo")) {
    window.location = "polo.html";
  } else if (input.includes("jeans")) {
    window.location = "jeans.html";
  } else if (input.includes("tr")) {
    window.location = "jeans.html";
  } else if (input.includes("vintage")) {
    window.location = "vintage.html";
  } else if (input.includes("pa")) {
    window.location = "palms.html";
  } else if (input.includes("sl")) {
    window.location = "palms.html";
  } else {
    const input1 = document.getElementById("firstNumber");
    input1.value = "";
    input1.placeholder = "🚫Item not found";
    // feedBackBox.style.opacity = "1";
    // searchFeedback.textContent = "Item not found";
  }
});

const designer = document.querySelector(".my-name");

designer.addEventListener("mouseover", function () {
  document.querySelector(".my-number").style.opacity = "1";
});

designer.addEventListener("mouseout", function () {
  document.querySelector(".my-number").style.opacity = "0";
});

////////////////////////////////
////implementing the menu bar
const menuImg = document.querySelector(".menu-img-home");
const menuBox = document.querySelector(".menu-box");
const menuClose = document.querySelector(".menu-close");
const container = document.querySelector(".container");
const contactClose = document.querySelector(".contact-close");
const contactSection = document.querySelector(".contact__right");
const feedbackBtn = document.querySelector(".feedback-btn");
const feedbackBtn2 = document.querySelector(".feedback-btn2");
const sectionOne = document.querySelector(".section-one");
const sectionTwo = document.querySelector(".section-two");
const sectionThree = document.querySelector(".section-three");
const sectionFour = document.querySelector(".section-four");
// const feedbackBtn2 = document.querySelector(".feedback-btn2");

menuImg.addEventListener("click", function (e) {
  // e.preventDefault();
  menuBox.style.display = "block";
  menuImg.style.display = "none";

  // container.style.opacity = '0.8'
});
menuClose.addEventListener("click", function (e) {
  // e.preventDefault();
  menuBox.style.display = "none";
  menuImg.style.display = "block";
  // menuBox.style.visibility = 'hidden';
});

contactClose.addEventListener("click", function (e) {
  // e.preventDefault();
  contactSection.style.display = "none";
});

feedbackBtn.addEventListener("click", function (e) {
  // e.preventDefault();
  contactSection.style.display = "block";
  sectionOne.style.display = "none";
  sectionTwo.style.display = "none";
  sectionThree.style.display = "none";
  // sectionFour.style.display = 'none';
});

contactClose.addEventListener("click", function (e) {
  // e.preventDefault();
  contactSection.style.display = "none";
  sectionOne.style.display = "";
  sectionTwo.style.display = "";
  sectionThree.style.display = "";
  sectionFour.style.display = "";
  menuBox.style.display = "block";
});

feedbackBtn2.addEventListener("click", function (e) {
  // e.preventDefault();
  contactSection.style.display = "block";
  sectionOne.style.display = "none";
  sectionTwo.style.display = "none";
  sectionThree.style.display = "none";
  sectionFour.style.display = "none";
  menuBox.style.display = "none";
});

const more = document.querySelector(".descrip-btn");
const less = document.querySelector(".descrip-btn2");
const descripBox = document.querySelector(".description");

more.addEventListener('click', function () {
  descripBox.style.height = "auto";
  more.style.display = "none";
  less.style.display = "inline-block";
});

less.addEventListener('click', function () {
  descripBox.style.height = "15rem";
  less.style.display = "none";
  more.style.display = "inline-block";
});
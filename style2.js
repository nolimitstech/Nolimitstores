////////////////////////
//IMPLEMENTING THE SLIDES

var section = document.querySelectorAll(".slider .section-two");
var dots = document.querySelectorAll(".dot");
var currentImg = 0; // index of the first image
// const interval = 5000; // duration(speed) of the slide
// var timer = setInterval(changeSlide, interval);
const feedBackBox = document.querySelector(".comment");
const searchFeedback = document.querySelector(".coment-p");
const navBtn = document.querySelector(".nav-btn");
const navAnchor = document.querySelector(".nav-anchor");

// function changeSlide(n) {
//   for (var i = 0; i < section.length; i++) { // reset
//     section[i].style.opacity = 0;
//     dots[i].className = dots[i].className.replace(' active', '');
//   }

//   currentImg = (currentImg + 1) % section.length; // update the index number

//   if (n != undefined) {
//     clearInterval(timer);
//     timer = setInterval(changeSlide, interval);
//     currentImg = n;
//   }
//   // currentImg = n;

//   section[currentImg].style.opacity = 1;
//   dots[currentImg].className += ' active';

// }

///////////////////////////////////
////IMPLEMENTING THE SEARCH
const submit = document.querySelector(".btn-div");
const firstAnchor = document.querySelector("first");
const secondAnchor = document.querySelector("second");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  // feedBackBox.style.opacity = '0';
  const input = document.querySelector(".firstN").value.toLowerCase();
  // input.textContent = '';
  if (input.includes("round")) {
    window.location = "index2.html";
  } else if (input.includes("t-shirt")) {
    window.location = "index2.html";
  } else if (input.includes("nicker")) {
    window.location = "index3.html";
  } else if (input.includes("short")) {
    window.location = "index3.html";
  } else if (input.includes("longs")) {
    window.location = "index4.html";
  } else if (input.includes("colarneck")) {
    window.location = "index5.html";
  } else if (input.includes("polo")) {
    window.location = "index5.html";
  } else if (input.includes("jeans")) {
    window.location = "index6.html";
  } else if (input.includes("chinos")) {
    window.location = "index7.html";
  } else if (input.includes("joggers")) {
    window.location = "index8.html";
  } else if (input.includes("jers")) {
    window.location = "index9.html";
  } else if (input.includes("cap")) {
    window.location = "index10.html";
  } else if (input.includes("jack")) {
    window.location = "index13.html";
  } else if (input.includes("track")) {
    window.location = "index14.html";
  } else if (input.includes("up")) {
    window.location = "index14.html";
  } else if (input.includes("shirt")) {
    window.location = "index15.html";
  } else if (input.includes("short sleeve")) {
    window.location = "index15.html";
  } else if (input.includes("vintage")) {
    window.location = "index16.html";
  } else if (input.includes("boxers")) {
    window.location = "index17.html";
  } else if (input.includes("sli")) {
    window.location = "index11.html";
  } else if (input.includes("foot")) {
    window.location = "index12.html";
  } else {
    const input1 = document.getElementById("firstNumber");
    input1.value = "";
    input1.placeholder = "Item not found";
  }
});

const designer = document.querySelector(".my-name");

designer.addEventListener("mouseover", function () {
  document.querySelector(".my-number").style.opacity = "1";
});

designer.addEventListener("mouseout", function () {
  document.querySelector(".my-number").style.opacity = "0";
});

//////////////////////////////////
///IMPLEMENTING THE banner SLIDER
var section = document.querySelectorAll(".slide-img-box");

var currentImg = 0; // index of the first image
const interval = 5000; // duration(speed) of the slide
var timer = setInterval(changeSlide, interval);

function changeSlide(n) {
  for (var i = 0; i < section.length; i++) {
    // reset
    section[i].style.opacity = 0;
  }

  currentImg = (currentImg + 1) % section.length; // update the index number

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }

  section[currentImg].style.opacity = 1;
}

////////////////////////////////
////implementing the menu bar
const menuLogo = document.querySelector(".menu-logo");
const menuBox = document.querySelector(".menu-box");
const menuClose = document.querySelector(".menu-close");
const container = document.querySelector(".container");
const contactClose = document.querySelector(".contact-close");
const contactSection = document.querySelector(".contact__right");
const feedbackBtn1 = document.querySelector(".feedback-btn1");
const feedbackBtn2 = document.querySelector(".feedback-btn2");
const sectionOne = document.querySelector(".section-one-box");
const sectionTwo = document.querySelector(".section-slider");
const sectionThree = document.querySelector(".section-three-others");
const sectionHeader = document.querySelector(".section-three-header");
const sectionNav = document.querySelector(".nav-boxes");
const sectionFour = document.querySelector(".section-four");
const alert = document.querySelector(".alert-box");

menuLogo.addEventListener("click", function (e) {
  // e.preventDefault();
  menuBox.style.display = "block";
  menuLogo.style.display = "none";
  // container.style.opacity = '0.8'
});
menuClose.addEventListener("click", function (e) {
  // e.preventDefault();
  menuBox.style.display = "none";
  menuLogo.style.display = "block";
});

// feedbackBtn.addEventListener("click", function (e) {
//   // e.preventDefault();
//   contactSection.style.display = "block";
// });
// const feedbackBtn1 = document.querySelector(".feedback-btn1");
feedbackBtn1.addEventListener("click", function () {
  // e.preventDefault();
  contactSection.style.display = "block";
  sectionOne.style.display = "none";
  sectionTwo.style.display = "none";
  sectionThree.style.display = "none";
  // sectionFour.style.display = "none";
  sectionHeader.style.display = "none";
  sectionNav.style.display = "none";
  // alert.style.display = "none";
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
  e.preventDefault();
  contactSection.style.display = "block";
  // sectionOne.style.display = "none";
  sectionTwo.style.display = "none";
  sectionThree.style.display = "none";
  menuBox.style.display = "none";
  sectionFour.style.display = "none";
});

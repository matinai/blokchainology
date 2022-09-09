const Lstart1 = document.querySelector(".LSclick");
const modalL1 = document.querySelector(".modalL1");
const modalL2 = document.querySelector(".modalL2");
const modalP1 = document.querySelector(".modalP1");
const modalP2 = document.querySelector(".modalP2");
const modalc = document.querySelector(".modalc");
const modalA = document.querySelector(".modalA");

function startml1() {
  modalL1.style.display = "flex";
  modalL1.style.margin = "0 auto";
  modalP1.style.display = "none";
}

function CmodalL1() {
  modalL1.style.display = "none";
  modalP1.style.display = "none";
}

function startmp1() {
  modalP1.style.display = "flex";
  modalP1.style.margin = "0 auto";
  modalL1.style.display = "none";
}

function startmp2() {
  modalP2.style.display = "flex";
  modalP2.style.margin = "0 auto";
  modalL2.style.display = "none";
}

function startml2() {
  modalL2.style.display = "flex";
  modalL2.style.margin = "0 auto";
  modalP2.style.display = "none";
}

function CmodalL2() {
  modalP2.style.display = "none";
  modalL2.style.display = "none";
}

let i = 0;
let x;
function SMD() {
  x = i++;
  if (x % 2 == 0) {
    modalc.style.display = "inline-block";
  } else {
    modalc.style.display = "none";
  }
}

function closemc() {
  x = i++;
  modalc.style.display = "none";
}

let b = 0;
let y;
function MA() {
  y = b++;
  if (y % 2 == 0) {
    modalA.style.display = "inline-block";
  } else {
    modalA.style.display = "none";
  }
}


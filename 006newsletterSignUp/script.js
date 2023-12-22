let subscribeButton = document.getElementById("subscribeButton");
let principalContainer = document.querySelector(".principalContainer");
let containerLeft = document.querySelector(".containerLeft");
let containerThanks = document.querySelector(".containerThanks");
let secondContainer = document.querySelector(".secondContainer");
let message = document.querySelector(".message");

subscribeButton.addEventListener("click", newPage);

function newPage() {
    console.log("Button clicked!");
    principalContainer.classList.add("hidden");
    secondContainer.classList.remove("hidden");
}



let containerRojo = document.querySelector(".containerRojo");
let newContainerRojo = document.querySelector(".containerAzul");
let button = document.querySelector(".button");

button.addEventListener("click", change);

function change() {
    containerRojo.classList.toggle("newContainerRojo");
    button.removeEventListener("click", change)
    
    console.log("click");
}

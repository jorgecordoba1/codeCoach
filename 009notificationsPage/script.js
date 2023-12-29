
let messages = document.querySelectorAll(".message");
let unreadPoints = document.querySelectorAll(".unreadPoint");
let number = document.querySelector(".number");
let read = document.querySelector(".read");

function actualizarNumeroMensajes() {
    let mensajesNoLeidos = document.querySelectorAll(".message:not(.messageReaded)").length;
    number.textContent = mensajesNoLeidos.toString();
}

messages.forEach(function(message, index) {
    message.addEventListener("click", function() {
        this.classList.toggle("messageReaded");

        unreadPoints[index].style.display = "none";

        actualizarNumeroMensajes();
    });
});

actualizarNumeroMensajes();

read.addEventListener("click", function() {

    messages.forEach(function(message, index) {
        message.classList.add("messageReaded");

        unreadPoints[index].style.display = "none";
    });

    actualizarNumeroMensajes();
});



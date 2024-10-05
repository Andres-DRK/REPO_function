function pintar(elementoid) {
    elemento = document.querySelector("#" + elementoid);
    elemento.style.backgroundColor = "black";
}
elemento.addEventListener("click", pintar);
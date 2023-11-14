const barra_navegacion = document.querySelector("#barra_inicio");
const abrir = document.querySelector("#menu_hamburguesa");
const cerrar = document.querySelector("#cerrar_menu")

abrir.addEventListener("click", () => {
    barra_navegacion.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    barra_navegacion.classList.remove("visible")
})
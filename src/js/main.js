let abrirMenu = document.querySelector("#btnMovil");
let cerrarMenu = document.querySelector("#btnMovil_cerrar");
let menuMovil = document.querySelector(".menu__movil");
let abrirListaMov = document.querySelector("#linkServiciosMovil");
let listaMovil = document.querySelector(".links__servicios__movil");
let abrirModal = document.querySelector("#modalLogo");
let modal = document.querySelector(".modal");
let cerrarModal = document.querySelector("#cerrarModal");
let opcionesPais = document.querySelectorAll(".opc__pais");
let imgHeader = document.querySelector("#imgHeader");
let navIndex = document.querySelector("nav");


/*FUNCION MENU MOVIL*/

abrirMenu.addEventListener("click", () => {

    menuMovil.classList.remove("ocultar");
});

cerrarMenu.addEventListener("click", () => {

    menuMovil.classList.add("ocultar");
});

/*FUNCION LISTA MOVIL*/

abrirListaMov.addEventListener("click", () => {

    listaMovil.classList.toggle("abrir");
});

/*FUNCION MODAL*/

abrirModal.addEventListener("click", () => {

    modal.classList.remove("cerrar");
});

cerrarModal.addEventListener("click", () => {

    modal.classList.add("cerrar");
});

/*FUNCION FILTRO LISTA*/

for(let opc of opcionesPais) {

    opc.addEventListener("click", () => {

        opc.classList.toggle("active");
    })
}

/*FUNCION CAMBIAR ESTILO NAV*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 200) {

        navIndex.classList.remove("scroll");
        imgHeader.src = "../../assets/logo-header.svg";
    } else {

        navIndex.classList.add("scroll");
        imgHeader.src = "../../assets/logo-footer.svg";
    }
})
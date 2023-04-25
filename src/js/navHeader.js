let imgHeader = document.querySelector("#imgHeader");
let navIndex = document.querySelector("nav");


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
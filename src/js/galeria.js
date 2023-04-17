let slider = document.querySelector(".galeria__imagenes");
let sliderImg = document.querySelectorAll(".galeria__imagenes img");
let sliderIzq = document.querySelector("#btnIzq");
let sliderDer = document.querySelector("#btnDer");
let contador = 1;
let tamañoSlider = sliderImg[0].clientWidth;

/*FUNCION SLIDER*/

slider.style.transform = `translateX(${-tamañoSlider * contador}px)`;

sliderDer.addEventListener("click", () => {

    slider.style.transition = "transform .4s ease-in-out";
    contador++;
    slider.style.transform = `translateX(${-tamañoSlider * contador}px)`;
})

sliderIzq.addEventListener("click", () => {

    slider.style.transition = "transform .4s ease-in-out";
    contador--;
    slider.style.transform = `translateX(${-tamañoSlider * contador}px)`;
})

slider.addEventListener("transitionend", () => {

    if(sliderImg[contador].id === "ultimaImg") {

        slider.style.transition = "none";
        contador = sliderImg.length - 2;
        slider.style.transform = `translateX(${-tamañoSlider * contador}px)`;
    }

    if(sliderImg[contador].id === "primeraImg") {

        slider.style.transition = "none";
        contador = sliderImg.length - contador;
        slider.style.transform = `translateX(${-tamañoSlider * contador}px)`;
    }
})
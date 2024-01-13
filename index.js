const navTop= document.querySelector(".top-header");
const icons= document.querySelectorAll(".top-header__icon");
const navbar= document.querySelector(".nav-switch");
const btn= document.querySelector(".navbar-toggler");
//const navbarDark= document.querySelector(".navbar-dark");


window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0){
        navTop.classList.add("switch-color");
        navTop.classList.remove("top-header");
        
        icons.forEach(icon => {
            icon.classList.add("switch-icon");
            icon.classList.remove("top-header__icon");
          });

        navbar.classList.add("nav-switch");
    } else {
        navTop.classList.remove("switch-color");
        navTop.classList.add("top-header");
        
        icons.forEach(icon => {
            icon.classList.remove("switch-icon");
            icon.classList.add("top-header__icon");
          });

        navbar.classList.add("navbar-dark");
        navbar.classList.remove("nav-switch");
    }
})

btn.addEventListener("click", ()=>{
    navbar.classList.add("nav-switch");
})







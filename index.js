const navTop= document.querySelector(".top-header");
const icon= document.querySelector(".top-header__icon");

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0){
        navTop.classList.add("switch-color");
        navTop.classList.remove("top-header");
        icon.classList.add("switch-icon");
        icon.classList.remove("top-header__icon");
        
    } else {
      navTop.classList.remove("switch-color");
      navTop.classList.add("top-header");
    }
})









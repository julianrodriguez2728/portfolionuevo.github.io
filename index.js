//SCROLL

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY> 0)
})

//RESPONSIVE

var toggle = document.querySelector(".toggle");
var navMenu = document.querySelector(".nav");

toggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("visible")
})
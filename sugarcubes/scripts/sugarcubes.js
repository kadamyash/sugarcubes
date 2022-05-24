// navbar
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".navlinks-mb");
const links = document.querySelectorAll(".navlinks-mb li");
let menuOpen = false;

burger.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
    if(!menuOpen){
        burger.classList.add("opened");
        menuOpen = true;
    }
    else{
        burger.classList.remove("opened");
        menuOpen = false;
    }
    links.forEach(link=>link.addEventListener("click", ()=>{
        navLinks.classList.remove("opened");
        burger.classList.remove("opened");
        menuOpen = false;
    }));
});

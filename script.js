const mobile_menu = document.querySelector(".mobile-menu");
const nav_menu = document.querySelector(".nav-menu");
const recette_card1 =document.querySelector(".recette-card1");
const recette_page1 =document.querySelector(".recette-page1");
const recette_card2 =document.querySelector(".recette-card2");
const recette_page2 =document.querySelector(".recette-page2");
const recette_card3 =document.querySelector(".recette-card3");
const recette_page3 =document.querySelector(".recette-page3");
const recette_card4 =document.querySelector(".recette-card4");
const recette_page4 =document.querySelector(".recette-page4");
const exit_icon1 =document.querySelector(".exit-icon1");
const exit_icon2 =document.querySelector(".exit-icon2");
const exit_icon3 =document.querySelector(".exit-icon3");
const exit_icon4 =document.querySelector(".exit-icon4");
const cart_icon =document.querySelector(".mobile-shopping");
const cart_page =document.querySelector(".cart-page");
const mobile_shopping =document.querySelector(".mobile-shopping");


/* Burger menu */
mobile_menu.addEventListener("click", () =>{
    mobile_menu.classList.toggle("is-active");
    nav_menu.classList.toggle("is-active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    mobile_menu.classList.remove("is-active");
    nav_menu.classList.remove("is-active");
}))


/* recette-cards */
recette_card1.addEventListener("click", () =>{
    recette_page1.classList.toggle("is-active");
})
recette_card2.addEventListener("click", () =>{
    recette_page2.classList.toggle("is-active");
})
recette_card3.addEventListener("click", () =>{
    recette_page3.classList.toggle("is-active");
})
recette_card4.addEventListener("click", () =>{
    recette_page4.classList.toggle("is-active");
})
exit_icon1.addEventListener("click", () =>{
    recette_page1.classList.remove("is-active");
})
exit_icon2.addEventListener("click", () =>{
    recette_page2.classList.remove("is-active");
})
exit_icon3.addEventListener("click", () =>{
    recette_page3.classList.remove("is-active");
})
exit_icon4.addEventListener("click", () =>{
    recette_page4.classList.remove("is-active");
})


/* Cart icon */
cart_icon.addEventListener("click", () =>{
    cart_page.classList.toggle("is-active");
    mobile_shopping.classList.toggle("is-active");
})
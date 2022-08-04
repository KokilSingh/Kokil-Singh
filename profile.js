/*---------------------- CHANGE NAVBAR TYPE FOR SCREEN <= 765px--------------------------- */

function navbarClass(media_x){
    let element =document.getElementsByClassName('navbar');
    if(media_x.matches){
        element[0].classList.add("navbar-dark");
        element[0].classList.add("bg-dark");
    }
    else{
        element[0].classList.remove("navbar-dark");
        element[0].classList.remove("bg-dark");
    }
}

let screen = window.matchMedia("(max-width: 765px)");
navbarClass(screen);
screen.addListener(navbarClass); // Attach listener

/*------------------ CHANGE NAVBAR TYPE WHEN SCROLLING--------------------*/

// Yet to be checked....
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".navbar").css({"background-color":"black"});   
        }
        else{
            $(".navbar").css({"background-color":""});
        }

    })
})
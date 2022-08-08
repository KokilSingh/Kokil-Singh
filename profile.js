/*---------------------- CHANGE NAVBAR TYPE FOR SCREEN <= 765px--------------------------- 

function navbarClass(media_x){
    let element =document.getElementsByClassName('navbar');
    if(media_x.matches){
        $(".navbar").css({"background-color":"white"});
    }
    else{
        $(".navbar").css({"background-color":"white"});
    }
}

let screen = window.matchMedia("(max-width: 765px)");
navbarClass(screen);
screen.addListener(navbarClass); // Attach listener
*/

/*------------------ CHANGE NAVBAR TYPE WHEN SCROLLING--------------------*/

// Yet to be checked....
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let navbar =document.getElementById('logo');
    navbar.style.transition ="0.4s";
    
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.setAttribute('width','50rem');
  } else {
    navbar.setAttribute('width','75rem');    
}
}

/*----------------------------------- TOOLTIP -------------------------------------- */

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

/*----------------------------------- Copy Email ----------------------------*/

original_email ='kokildeepti@gmail.com'

function copyEmail(){
    let email =document.getElementById('email-copy');
    navigator.clipboard.writeText(original_email);
    email.innerHTML="<p style='color: green'> Copied to clipboard</p>";
    setTimeout(function(){
        email.innerHTML =original_email;
    },300);
}

/*------------------------------------ Calculate Age--------------------------------------- */
/* 
let dob = new Date("10/05/2002");
var month_diff = Date.now() - dob.getTime();  
      
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);   
  
//extract year from date      
var year = age_dt.getUTCFullYear();  
  
//now calculate the age of the user  
document.getElementById('age').innerText = Math.abs(year - 1970); 
*/

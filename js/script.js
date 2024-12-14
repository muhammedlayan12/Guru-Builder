//js for navbar toggling

const navToggle = () =>{
    const sideMenu = document.getElementsByClassName('sideMenu')[0];
    sideMenu.classList.toggle('open');
}

//preloader

 
window.addEventListener("load", function() {
    document.body.classList.add('loaded');
  });
  
 


//FAQs Section js

 
$(document).ready(function () {
    $(".faqTittle").hide();  

    $(".watch").click(function () {
 
 
        $(this).closest(".accordion").find(".faqTittle").slideToggle("slow");
    });
});


 

//for,m value on submit\


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

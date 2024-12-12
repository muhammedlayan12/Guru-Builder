//js for navbar toggling

const navToggle = () =>{
    const sideMenu = document.getElementsByClassName('sideMenu')[0];
    sideMenu.classList.toggle('open');
}

//preloader

 

window.addEventListener('load', () => {
    const loading = document.getElementsByClassName('preloader')[0];
    loading.classList.toggle("hide ");
});



//FAQs Section js

 
$(document).ready(function () {
    $(".faqTittle").hide();  

    $(".watch").click(function () {
 
 
        $(this).closest(".accordion").find(".faqTittle").slideToggle("slow");
    });
});

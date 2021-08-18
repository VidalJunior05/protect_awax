$(function(){
    var imgBarsMobile = document.querySelector('.menu-opener');
    imgBarsMobile.addEventListener('click',(e) =>{
        e.preventDefault();
        $('nav').slideToggle();
    })
});
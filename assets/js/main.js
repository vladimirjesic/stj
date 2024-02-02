var paths = ["index.html", "#about-section", "#coaches-section", "#gallery-section", "#rackets-section", "#contact-section", "author.html"];
var nav = ["HOME", "ABOUT US", "COACHES", "GALLERY", "RACKETS", "CONTACT", "AUTHOR"];
var menu = document.getElementById("menu");
var links = "";
for(var i=0; i<nav.length; i++) {
    links+="<li class='nav-item'><a class='nav-link linkh' href=" + paths[i] + ">" + nav[i] + "</a></li>";
}
menu.innerHTML=links;


const button = document.getElementById("btn1")
button.addEventListener("click", function(){
    window.location.href = "#contact-section";
})

$("#btn-tg-1").click(function(){
    $("#tg-1").toggle("slow");
    })

$("#btn-tg-2").click(function(){
    $("#tg-2").toggle("slow");
    })


var coaches = ["coach1.jpg", "coach2.jpg", "coach3.jpg", "coach4.jpg", "coach5.jpg", "coach6.jpg"];
var names = ["Timo Boll", "Quadri Aruna", "Truls Moregard", "Mattias Falck", "Darko Jorgic", "Panagiotis Gionis"];
var descriptions = ["The record-holder for number of European titles won and a champion across multiple international competitions.", "Crowned Male Table Tennis Star of 2014 and Africa’s highest-ranked player", "Won bronze with the Swedish team at the World Team Table Tennis Championships in 2018, as well as at the 2019 European Table Tennis Championships. ", "Sensational display at the 2019 ITTF World Championships in Budapest, where he became the first Swede to reach the men’s singles final since 1997!", "He made a surprise run to the Quarterfinals of the Tokyo 2020 Olympics followed by an impressive showing at WTT Star Contender Doha 2021, narrowly losing out in the Final.", "The Greek has competed in four Olympic Games, starting on home soil at Athens 2004, and he led the men’s national team to a remarkable silver medal at the 2013 European Championships, where he finished third in the men’s singles event."];
for(var i=1; i<coaches.length+1; i++) {
    let plain = "";
    let content = document.getElementById("card"+i);
    plain += "<img src='assets/images/" + coaches[i-1] + "' class='card-img-top' alt='Coach'> <div class='card-body'> <h5 class='card-title'>" + names[i-1] + "</h5> <p class='card-text'>" + descriptions[i-1] + "</p></div>";
    content.innerHTML=plain;
}




$(document).ready(function(){
   $('.next').click(function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
    }
    else{
        var firstImg = $('#first');
        currentImg.removeClass('active').css('z-index', -10);
        firstImg.addClass('active').css('z-index', 10);
    }
   }) 
})

galleryPaths = ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg", "gallery5.jpg", "gallery6.jpg"];
var slider = document.getElementById("slider");
plain1="";
plain1 += "<img id='first' src='assets/images/" + galleryPaths[0] + "' alt='Table tennis players' class='active'>";
for(var i=1;i<galleryPaths.length;i++){
    plain1 += "<img src='assets/images/" + galleryPaths[i] + "' alt='Table tennis players'>";
}
plain1 += "<img id='last' src='assets/images/" + galleryPaths[galleryPaths.length-1] + "' alt='Table tennis players'>";
slider.innerHTML = plain1;

$(document).ready(function(){
    $('.prev').click(function(){
     var currentImg = $('.active');
     var prevImg = currentImg.prev();
 
     if(prevImg.length){
         currentImg.removeClass('active').css('z-index', -10);
         prevImg.addClass('active').css('z-index', 10);
     }
     else{
        var lastImg = $('#last');
        currentImg.removeClass('active').css('z-index', -10);
        lastImg.addClass('active').css('z-index', 10);
    }
    }) 
 })



 var regExName=/^[A-Z][a-z]{2,10}$/;

 var inputName=document.getElementById("fname");
 
 function checkName(){
 
     if(!regExName.test(inputName.value))
     {
        document.getElementById("errorName").style.display="block";
        inputName.style.border="3px solid red";
     }
     else{
         document.getElementById("errorName").style.display="none";
        inputName.style.border="3px solid green";
     }
 }
 
 inputName.addEventListener("blur",checkName);

 


 var regExLName=/^[A-Z][a-z]{2,10}$/;

var inputLName=document.getElementById("lname");

function checkLName(){

    if(!regExLName.test(inputLName.value))
    {
       document.getElementById("errorLName").style.display="block";
       inputLName.style.border="3px solid red";
    }
    else{
        document.getElementById("errorLName").style.display="none";
       inputLName.style.border="3px solid green";
    }
}

inputLName.addEventListener("blur",checkLName);



var regExEmail=/^[a-z-\.]+@([a-z-]+\.)+[a-z-]{2,4}$/;

var inputEmail=document.getElementById("email");

function checkEmail(){

    if(!regExEmail.test(inputEmail.value))
    {
       document.getElementById("errorEmail").style.display="block";
       inputEmail.style.border="3px solid red";
    }
    else{
        document.getElementById("errorEmail").style.display="none";
       inputEmail.style.border="3px solid green";
    }
}

inputEmail.addEventListener("blur",checkEmail);



var regExPhone = /^[0-9]{9}$/

var inputPhone = document.getElementById("phone")

function checkPhone(){

    if(!regExPhone.test(inputPhone.value))
    {
       document.getElementById("errorPhone").style.display="block";
       inputPhone.style.border="3px solid red";
    }
    else{
        document.getElementById("errorPhone").style.display="none";
       inputPhone.style.border="3px solid green";
    }
}

inputPhone.addEventListener("blur",checkPhone);




var footer = document.getElementById("ft");
footer.innerHTML="<p class='mb-0 p-1'>&copy All rights reserved Vladimir Jesic 2023. | <a href='dokumentacija.pdf' target='_blank'>Documentation</a> | <a href='sitemap.xml' target='_blank'>Sitemap</a></p>"
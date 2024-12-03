let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

(function() {
  emailjs.init("eAXZUrBjmiWQBgOSd");
})();

let templateParams = {
  to_name : "Venkadesan",
  from_name: name.value,
  from_email:email.value,
  from_subject:subject.value,
  message:message.value
}

function submitMessage() {
  templateParams.to_name = "Venkadesan";
  templateParams.from_name = name.value;
  templateParams.from_email = email.value;
  templateParams.from_subject = subject.value;
  templateParams.message = message.value;
  emailjs.send("service_fs48a7k","template_h2o5zu6",templateParams)
  .then(function(){
    showAlert("Message sent successfully!");
    name.value="";
    email.value="";
    subject.value="";
    message.value="";
  }),function() {
    showAlert("Failed to send message!");
  }
}


 function showAlert(message) {
   const alert = document.getElementById("alert");
   alert.innerHTML = message;
   alert.style.display = "flex";
   setTimeout(function(){
     alert.style.display = "none";
   },3000);
 }


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Python Fullstack Developer", "Data Analyst", "Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
       strings: ["Python Fullstack Developer", "Data Analyst", "Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
window.addEventListener('load', function() {
    var logo = document.getElementById('link');
  
    logo.style.animation = 'moveRightBack 2s ease-in-out';
   
    logo.addEventListener('animationend', function() {
      logo.style.animation = 'moveRightBack 2s ease-in-out';
    });
  });

// logo loder  //////////////////////////


function toggleNavbar(){
    const navbarLinks = document.getElementById('navbar');
    if(navbarLinks.style.display === "block"){
        navbarLinks.style.display = "none"
    }else{
        navbarLinks.style.display = "block";
    }
}

// /////////////////////////////////////
// login
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
});

// ////////////////////////////////////


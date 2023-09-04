
let section= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('section');

window.onscroll= () =>{
    Selections.forEach(sec=>{
        let top= window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[hreef*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

ScrollReveal({ 
    reset: true ,
    distance:'80px',
    duration:2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form' ,{ origin: 'top' });

var typed = new Typed('#element', {
    strings : ['Web Developer', 'Expert in C++ language','Photographer','Cricket Lover'],
    typeSpeed: 65,
  });

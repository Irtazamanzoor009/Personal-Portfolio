let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navlinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () =>
{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

navlinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };
});



// ---------------------- scroll section active link ---------------------
let sections = document.querySelectorAll('section');


window.onscroll = () =>
{
    sections.forEach(sec => 
        {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height)
            {
                navlinks.forEach.apply(links => {
                    links.classList.remove('active');
                  //  document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                  document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');

                });
            }
        });


    // -------------------- sticky navbar ----------------

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ------------------------- remove toggle icon and navbar ---------------------
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}


// ------------------- scroll reveal JS ----------------

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('heading', { origin: 'top'});
 ScrollReveal().reveal('.services-box, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.about-content, .home-img', { origin: 'right' });


 // typed JS

 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer' , 'Web Designer', 'YouTuber'],
    typeSpeed: 50,
    backSpeed: 70,
    backDelay: 70,
    loop: true,
 });
const hireButton = document.querySelector('.banner .button');
const hireDetails = document.querySelector('.details');

const menuButton = document.querySelector('nav .button');
const navCloseButton = document.querySelector('nav .close');
const navLinkContainer = document.querySelector('nav .links');

const footerLinks = document.querySelectorAll('.footer .links ul li a');
const navLinks = document.querySelectorAll('nav .links ul li a');

footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the target element ID from the link's href
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll to the target element with smooth behavior
            window.scrollTo({
                top: targetElement.offsetTop + 50,
                behavior: 'smooth'
            });
        }
    });
});

const removeActive = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    })
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the target element ID from the link's href
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Check if the target element exists
        if (targetElement) {
            // Scroll to the target element with smooth behavior
            window.scrollTo({
                top: targetElement.offsetTop + 50,
                behavior: 'smooth'
            });

            // Add the 'active' class to the clicked link
            removeActive();
            link.classList.add('active');
        }
    });
});



menuButton.addEventListener('click', () => {
    menuButton.style.display = 'none';
    navCloseButton.style.display = 'block';
    navLinkContainer.style.display = 'block';

});

navCloseButton.addEventListener('click', () => {
    navCloseButton.style.display = 'none';
    menuButton.style.display = 'block';
    navLinkContainer.style.display = 'none';
});

const hireLink = document.querySelector('#hire-link');


hireLink.addEventListener('click', function(e) {
    e.preventDefault();

    // Get the target element using the href value
    const targetId = hireLink.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        // Scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        // Optionally hide hireDetails element
        const hireDetails = document.querySelector('.details');
        if (hireDetails) {
            hireDetails.style.display = 'none';
        }
        alert('Please fill the following form and click the submit button');
    }
});

const sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let yOffset = parseInt(sec.getAttribute('data-yOffset'));
        console.log(yOffset);
        // Get the scroll position, section offset, and section height inside the loop
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight + 400;

        

        if (top >= offset + 400 && top < offset + height){
            
            let secID = sec.getAttribute('id');
            navLinks.forEach(link => {
                let linkHref = link.getAttribute('href');
                
                // Handle cases where the href may have an additional '#' character
                if (linkHref === '#' + secID || linkHref === secID) {
                    removeActive();
                    link.classList.add('active');
                }
            });
        }
        // Check if the section is in the viewport
        if (top >= offset && top < offset + height) {
            if(sec.classList.contains('portifolio')){
                sec.classList.add('show-animate');
            }


            let animatedElements = sec.querySelectorAll('.animate');
            animatedElements.forEach(element => {
                element.classList.add('show-animate');
                element.style.transitionDelay = '300ms';
                element.style.transition = '1200ms';
            });
            sec.classList.add('show-animate');
        } else {
            // Remove the class 'show-animate' from elements outside the viewport
            let animatedElements = sec.querySelectorAll('.animate');

            animatedElements.forEach(element => {
                element.classList.remove('show-animate');
            });
            sec.classList.remove('show-animate');
        }
    });
};

 

hireButton.addEventListener('click', (e) => {
    if(hireDetails.classList.contains('none')){
        hireDetails.style.display = 'block';
        hireDetails.classList.remove('none');
    }
    else{
        hireDetails.style.display = 'none';
        hireDetails.classList.add('none');
    }
});

const aboutButton = document.querySelector('.about .button');

aboutButton.addEventListener('click', (e) => {
    if(hireDetails.classList.contains('none')){
        hireDetails.style.display = 'block';
        hireDetails.classList.remove('none');
    }
    else{
        hireDetails.style.display = 'none';
        hireDetails.classList.add('none');
    }
});

const services = document.querySelectorAll('.services .container .service');
const serviceButtons = document.querySelectorAll('.services .container .service a');

serviceButtons.forEach(but => {
    but.addEventListener('click', (e) => {
        e.preventDefault();

        if (hireDetails.classList.contains('none')) {
            hireDetails.style.display = 'block';
            hireDetails.classList.remove('none');
        } else {
            hireDetails.style.display = 'none';
            hireDetails.classList.add('none');
        }
        services.forEach(ser => {
            ser.style.backgroundColor = 'transparent';
        })

        // Get the target element using the href value
        const targetId = but.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            targetElement.style.backgroundColor = '#bbb';
            targetElement.style.boxShadow = '0 0 1rem #000';
            setTimeout(() => {
                targetElement.style.backgroundColor = 'transparent';
                targetElement.style.boxShadow = '0 0 .5rem #6c63ff';
            }, 5000);
        }
    }); 
});


const closeButton = document.querySelector('.details .close');
closeButton.addEventListener('click', ()=>{
    hireDetails.style.display = 'none';
    hireDetails.classList.add('none'); 
});

document.querySelectorAll('nav-link').forEach(link => {
    link.addEventListener('click', scrollToSection);
});



const BackToTop = document.querySelector('.but-container a');

BackToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // You can use 'auto' or 'smooth' for smooth scrolling
    });
});


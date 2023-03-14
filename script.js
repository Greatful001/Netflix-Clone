const accordion = document.getElementsByClassName('accordion-text');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function( ) {
        this.classList.toggle('active');
    })
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const fade = document.querySelectorAll('.fade-in');
fade.forEach((el) => observer.observe(el));



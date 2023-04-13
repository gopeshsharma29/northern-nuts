// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');    
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');    
    })
};  
// slide hover

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.textb',{delay:100, origin:'left'})
    
sr.reveal('.home-img',{delay:100, origin:'right'})
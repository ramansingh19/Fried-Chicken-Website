// /*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu')
        })
      }

      if(navClose){
        navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu')
        })
      }


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById('header');
  if (window.scrollY >= 50) {
    header.classList.add('shadow-header');
  } else {
    header.classList.remove('shadow-header');
  }
};
window.addEventListener('scroll', shadowHeader);



/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUpEl = document.getElementById('scroll-up');
  if (window.scrollY >= 350) {
    scrollUpEl.classList.add('show-scroll');
  } else {
    scrollUpEl.classList.remove('show-scroll');
  }
};

window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');

    const sectionsClass = document.querySelector(`.nav_menu a[href*="${sectionId}"]`);

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin : 'top',
  distance : '60px',
  duration : 2000,
  delay : 300,
  reset : true,
})

sr.reveal(`.home_data , .about_data, .footer_container`)
sr.reveal('.home_images', {delay:1000 , easing: 'ease-in-out'})
sr.reveal(`.home_dam-1`, {delay:1000, scale: 0, rotate: {z: 45}, easing: 'ease-in-out'})
sr.reveal(`.home_dam-2, .home_dam-3`, {delay:1400, scale: 0, rotate: {z: 45}, easing: 'ease-in-out'})
sr.reveal(`.home_dam-4`, {delay:1700, scale: 0, rotate: {z: 45}, easing: 'ease-in-out'})
sr.reveal(`.home_dam-5`, {delay:1800, scale: 0, rotate: {z: 45}, easing: 'ease-in-out'})
sr.reveal(`.about_img-1`, {delay: 600, origin: 'right', easing: 'ease-in-out'})
sr.reveal(`.about_img-2`, {delay: 800, origin: 'right', easing: 'ease-in-out'})
sr.reveal(`.about_tooltip-1`, {delay:1600, origin: 'left', easing: 'ease-in-out'})
sr.reveal(`.about_tooltip-2`, {delay:1800, origin: 'right', easing: 'ease-in-out'})
sr.reveal(`.order_card:nth-child(1)`, {origin: 'right'})
sr.reveal(`.order_card:nth-child(2)`, {origin: 'left'})
sr.reveal(`.order_tooltip-1`, {delay: 800, origin: 'right', easing: 'ease-in-out'})
sr.reveal(`.order_tooltip-2`, {delay: 800, origin: 'left', easing: 'ease-in-out'})
sr.reveal(`.combo_titles`, {origin: 'bottom'})
sr.reveal(`.combo_img`, {delay: 1000, easing: 'ease-in-out'})
sr.reveal(`.combo_data`, {delay: 1600, easing: 'ease-in-out'}) 
sr.reveal(`.combo_numbers`, {delay: 1600, origin: 'bottom'})
sr.reveal(`.contact_data`, { origin: 'right'})
sr.reveal(`.contact_info`, { origin: 'left'})
sr.reveal(`.contact_img-1`, {delay: 1000, distance: 0, scale: 0, rotate: {z: -45} ,easing: 'ease-in-out'})
sr.reveal(`.contact_img-2`, {delay: 1200, distance: 0, scale: 0, rotate: {z: 45}, easing: 'ease-in-out'})
sr.reveal(`.contact_dam-1`, {delay: 1400, scale: 0, rotate: {z: 45},easing: 'ease-in-out'})
sr.reveal(`.contact_dam-2`, {delay: 1800, scale: 0, rotate: {z: 45}, easing: 'ease-in-out'})
sr.reveal(`.contact_dam-3`, {delay: 1600,  scale: 0, rotate: {z: 45}, easing: 'ease-in-out'})
sr.reveal(`.contact_dam-4`, {delay: 2000, scale: 0, rotate: {z: 45}, easing: 'ease-in-out'})

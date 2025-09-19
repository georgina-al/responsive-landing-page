/*=========== SHOW MENU ==========*/
const navMenu   = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close')

/*============= MENU SHOW ==========*/
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*============= MENU HIDE ==========*/
if (navClose && navMenu) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*========= REMOVE MENU MOBILE ========*/
const navLinks = document.querySelectorAll('.nav__link')

function linkAction() {
  if (navMenu) navMenu.classList.remove('show-menu')
}

navLinks.forEach(link => link.addEventListener('click', linkAction))

/*========== CHANGE BACKGROUND HEADER ===========*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 50px, add the scroll-header class
  if (window.scrollY >= 50) {
    header.classList.add('scroll-header')
  } else {
    header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

/*========= SHOW SCROLL UP ==========*/
function scrollUp(){
  const scrollUpEl = document.getElementById('scroll-up')
  // Εμφάνισε/κρύψε με βάση το bottom (CSS έχει αρχικά bottom: -20%)
  if (!scrollUpEl) return
  if (window.scrollY >= 200) {
    scrollUpEl.style.bottom = '1.5rem'
  } else {
    scrollUpEl.style.bottom = '-20%'
  }
}
window.addEventListener('scroll', scrollUp)

/*================ SCROLL SECTION ACTIVE LINK ================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute('id')

    const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if (!link) return

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add('active-link')
    } else {
      link.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*================== SCROLL REVEAL ANIMATION =================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__header, .section__title`, {delay: 600})
sr.reveal(`.home_footer`, {delay: 700})          // <-- ταιριάζει με το HTML
sr.reveal(`.home__img`, {delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, {origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`, {origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`, {origin: 'right'})
sr.reveal(`.case__img`, {origin: 'top'})


document.querySelectorAll('#navMenu a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
c
    document.getElementById('navMenu').classList.remove('open');
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    target?.scrollIntoView({behavior: 'smooth'});
  });
});


const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});


const sections = document.querySelectorAll('section[id]');
const options = { rootMargin: '-50% 0px -45% 0px' };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const link = document.querySelector(`#navMenu a[href="#${entry.target.id}"]`);
    if (link) {
      if (entry.isIntersecting) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}, options);
sections.forEach(sec => observer.observe(sec));


const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});



window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });
  
  if (currentSection) {
    const currentSectionElement = document.getElementById(currentSection);
    const currentSectionColor = window.getComputedStyle(currentSectionElement).backgroundColor;
    navbar.style.backgroundColor = currentSectionColor;
  } else {
    navbar.style.backgroundColor = '#333'; // Default color
  }

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

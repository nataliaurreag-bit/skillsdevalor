const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      event.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

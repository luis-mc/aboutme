// Nav: scroll state + hamburger toggle
const nav = document.getElementById('nav');
const btn = nav.querySelector('.nav-toggle');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

btn.addEventListener('click', () => {
  const open = nav.classList.toggle('nav-open');
  btn.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
  });
});

// Scroll fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.focus-card, .timeline-item, .writing-item, .recognition-card, .stat')
  .forEach(el => {
    el.classList.add('fade-target');
    observer.observe(el);
  });

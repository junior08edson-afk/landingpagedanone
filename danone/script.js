const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

document.querySelector('[data-year]').textContent = new Date().getFullYear();

const setHeaderState = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 30);
};

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

menuToggle.addEventListener('click', () => {
  const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(willOpen));
  menuToggle.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
  mobileMenu.classList.toggle('is-open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = document.querySelectorAll('.reveal');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  revealElements.forEach((element) => revealObserver.observe(element));
}

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (mobileMenu.classList.contains('is-open')) closeMenu();
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.desktop-nav a').forEach((link) => {
      if (link.getAttribute('href') === `#${entry.target.id}`) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  });
}, { threshold: 0.35 });

document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

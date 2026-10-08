const slides = [...document.querySelectorAll('.hero-slide')];
const slideButtons = [...document.querySelectorAll('.slide-dot')];
const hero = document.querySelector('.hero');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let activeSlide = 0;
let timer;

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('is-active', i === activeSlide));
  slideButtons.forEach((button, i) => {
    const selected = i === activeSlide;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function stopRotation() {
  window.clearInterval(timer);
  timer = undefined;
}

function startRotation() {
  stopRotation();
  if (!reducedMotion && !document.hidden) {
    timer = window.setInterval(() => showSlide(activeSlide + 1), 3000);
  }
}

slideButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showSlide(Number(button.dataset.slide));
    startRotation();
  });
});

hero?.addEventListener('mouseenter', stopRotation);
hero?.addEventListener('mouseleave', startRotation);
hero?.addEventListener('focusin', stopRotation);
hero?.addEventListener('focusout', (event) => {
  if (!hero.contains(event.relatedTarget)) startRotation();
});
document.addEventListener('visibilitychange', startRotation);
startRotation();

const whatsappText = 'Olá, Denise! Quero agendar um Encontro de Planejamento para a viagem da minha família.';
document.querySelectorAll('.wa-link').forEach((link) => {
  link.href = `https://wa.me/5531997990064?text=${encodeURIComponent(whatsappText)}`;
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
      navigation.classList.remove('is-open');
    });
  });
}

document.querySelectorAll('.faq-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-list details[open]').forEach((openItem) => {
      if (openItem !== item) openItem.removeAttribute('open');
    });
  });
});

const revealItems = document.querySelectorAll(
  '.destination-card, .steps .step, .denise-portrait, .denise-copy, .testimonial-inner, .included-list > div',
);

if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  revealItems.forEach((item, index) => {
    item.classList.add('reveal-ready');
    item.style.transitionDelay = `${(index % 3) * 45}ms`;
    revealObserver.observe(item);
  });
}

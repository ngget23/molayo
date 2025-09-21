// Basic utilities shared across pages

// Year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';
      toggle.setAttribute('aria-expanded', String(!open));
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) nav.style.display = 'flex';
      else nav.style.display = 'none';
    });
  }

  // Active link based on data-page
  const page = document.body.getAttribute('data-page');
  if (page) {
    document.querySelectorAll('.nav a').forEach(a => {
      if (a.getAttribute('href')?.includes(page)) a.classList.add('active');
    });
  }

  // Contact form fake submit
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');
  if (contactForm && contactStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactStatus.textContent = 'Thanks! We’ll be in touch within 24–48 hours.';
    });
  }
});

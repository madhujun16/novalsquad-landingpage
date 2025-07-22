// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav ul#nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      // Close mobile nav if open
      document.getElementById('nav-links').classList.remove('open');
    }
  });
});

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animated reveal on scroll
function revealOnScroll() {
  document.querySelectorAll('.section, .card').forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinksList = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  navLinksList.classList.toggle('open');
});

// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
  document.body.classList.add('dark');
}
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem('theme', 'light');
    darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});
// Set correct icon on load
if (document.body.classList.contains('dark')) {
  darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Form validation and feedback
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('form-message');
form.addEventListener('submit', function(e) {
  formMsg.textContent = '';
  formMsg.className = '';
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  if (!name || !email) {
    e.preventDefault();
    formMsg.textContent = 'Please fill in all required fields.';
    formMsg.classList.add('error');
    return;
  }
  // Show loading
  formMsg.textContent = 'Sending...';
  formMsg.classList.remove('error', 'success');
});
// Show success message after submit (for Google Forms redirect)
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.search.includes('success')) {
    formMsg.textContent = 'Thank you! We have received your message.';
    formMsg.classList.add('success');
  }
});

// Animate hero text on load
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-content.animate-hero');
  if (hero) {
    hero.classList.add('animated');
  }
  // Floating label logic
  document.querySelectorAll('.floating-label input, .floating-label textarea').forEach(input => {
    input.addEventListener('blur', function() {
      if (this.value) {
        this.classList.add('filled');
      } else {
        this.classList.remove('filled');
      }
    });
    // On page load
    if (input.value) {
      input.classList.add('filled');
    }
  });
  document.querySelectorAll('.floating-label select').forEach(select => {
    select.addEventListener('change', function() {
      if (this.value) {
        this.classList.add('filled');
      } else {
        this.classList.remove('filled');
      }
    });
    if (select.value) {
      select.classList.add('filled');
    }
  });
}); 
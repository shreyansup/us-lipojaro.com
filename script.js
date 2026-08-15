/* ============================================
LipoJaro™ — Main JavaScript
============================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* === FAQ Accordion === */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.parentElement;
      document.querySelectorAll('.faq-item').forEach(function (i) {
        if (i !== item) i.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });

  /* === Smooth Scroll === */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        var navLinks = document.querySelector('.nav-links');
        if (navLinks) navLinks.classList.remove('active');
      }
    });
  });

  /* === Nav Scroll Effect === */
  var nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* === Mobile Nav Toggle === */
  var toggle = document.querySelector('.mobile-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () { navLinks.classList.toggle('active'); });
  }

  /* === Scroll Reveal === */
  var reveals = document.querySelectorAll('.why-card, .mech-card, .ing-card, .ben-card, .review-card, .price-card, .form-card, .faq-item');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = entry.target.classList.contains('featured') ? 'scale(1.03)' : 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  /* === Purchase Notification Popup === */
  var cities = ['New York, NY','Los Angeles, CA','Chicago, IL','Houston, TX','Phoenix, AZ','Philadelphia, PA','San Antonio, TX','San Diego, CA','Dallas, TX','Austin, TX','Jacksonville, FL','Columbus, OH','Charlotte, NC','Seattle, WA','Denver, CO','Boston, MA','Nashville, TN','Portland, OR','Las Vegas, NV','Miami, FL','Atlanta, GA','Tampa, FL','Sacramento, CA'];
  var popup = document.getElementById('purchasePopup');
  var popupText = document.getElementById('popupText');
  function showPurchasePopup() {
    if (!popup || !popupText) return;
    popupText.textContent = 'Someone from ' + cities[Math.floor(Math.random() * cities.length)] + ' just purchased LipoJaro!';
    popup.classList.add('show');
    setTimeout(function () { popup.classList.remove('show'); }, 5000);
  }
  setTimeout(showPurchasePopup, 4000 + Math.random() * 1000);
  setInterval(showPurchasePopup, 30000 + Math.random() * 15000);

  /* === Back to Top === */
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* === Current Year === */
  var yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
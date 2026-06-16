document.addEventListener('DOMContentLoaded', function () {
  var navEl = document.getElementById('nav');
  if (!navEl) return;

  // Mobile submenu toggle — click on .nav-drop-toggle
  navEl.addEventListener('click', function (e) {
    var toggle = e.target.closest('.nav-drop-toggle');
    if (!toggle) return;
    if (window.innerWidth > 900) return;
    e.preventDefault();
    var dropdown = toggle.closest('.nav-dropdown');
    var isOpen = dropdown.classList.contains('mobile-open');
    document.querySelectorAll('.nav-dropdown.mobile-open').forEach(function (d) {
      d.classList.remove('mobile-open');
    });
    if (!isOpen) dropdown.classList.add('mobile-open');
  });

  // Reset mobile dropdowns when menu closes
  var hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (navEl.classList.contains('open')) {
        document.querySelectorAll('.nav-dropdown.mobile-open').forEach(function (d) {
          d.classList.remove('mobile-open');
        });
      }
    });
  }
});

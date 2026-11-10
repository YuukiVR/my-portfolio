// Projects dropdown menu — works with mouse (CSS hover),
// keyboard (focus-within + Escape), and touch (click toggle).
document.querySelectorAll('.nav-dropdown-toggle').forEach((toggle) => {
  const dropdown = toggle.closest('.nav-dropdown');
  const submenu = dropdown.querySelector('.nav-submenu');

  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    dropdown.classList.remove('is-open');
  };

  const open = () => {
    // Close any other open dropdowns first.
    document
      .querySelectorAll('.nav-dropdown-toggle[aria-expanded="true"]')
      .forEach((other) => {
        if (other !== toggle) {
          other.setAttribute('aria-expanded', 'false');
          other.closest('.nav-dropdown').classList.remove('is-open');
        }
      });
    toggle.setAttribute('aria-expanded', 'true');
    dropdown.classList.add('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      close();
    } else {
      open();
    }
  });

  dropdown.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      close();
      toggle.focus();
    }
  });

  // Close when clicking outside the dropdown.
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      close();
    }
  });

  // Close after following a submenu link.
  submenu.addEventListener('click', close);
});

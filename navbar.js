
  document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');

    if (navbar && toggler && window.bootstrap && bootstrap.Collapse) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);

      // Toggle manually on button click
      toggler.addEventListener('click', function (e) {
        if (navbar.classList.contains('show')) {
          bsCollapse.hide();
        } else {
          bsCollapse.show();
        }
      });

      // Close navbar if clicking outside
      document.addEventListener('click', function (event) {
        const isOpen = navbar.classList.contains('show');
        const clickedInsideNavbar = navbar.contains(event.target);
        const clickedToggler = toggler.contains(event.target);

        if (isOpen && !clickedInsideNavbar && !clickedToggler) {
          bsCollapse.hide();
        }
      });
    }
  });


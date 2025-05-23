document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  let navMenu = document.getElementById("nav-menu");

  hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  document.body.addEventListener("click", (event) => {
    const isTargetInsideButton = hamburgerButton.contains(event.target);
    const isTargetInsideDrawer = navMenu.contains(event.target);

    if (!(isTargetInsideButton || isTargetInsideDrawer)) {
      navMenu.classList.remove("open");
    }

    navMenu.querySelectorAll("a").forEach((link) => {
      if (link.contains(event.target)) {
        navMenu.classList.remove("open");
      }
    });
  });
});

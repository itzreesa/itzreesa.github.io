// yay js!

const navigationButtons = document.querySelectorAll('[id^=n]');
const pages = document.querySelectorAll('[id^=p]');

function setup() {
  setupNavigation();
}

function setupNavigation() {
  navigationButtons.forEach(button => {
    button.addEventListener('click', () => {
      const index = button.id.slice(1);

      pages.forEach(page => page.classList.remove('active'));

      const selectedPage = document.getElementById(`p${index}`);
      if (selectedPage)
        selectedPage.classList.add("active");
    });
  });
}
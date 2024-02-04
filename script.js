function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const marqueeText = "🎉✨Welcome to my Tahir Porfolio ";
let index = 0;

function updateTitle() {
  document.title = marqueeText.substring(index) + marqueeText.substring(0, index);
  index = (index + 1) % marqueeText.length;
}

setInterval(updateTitle, 1000); // Adjust the interval as needed


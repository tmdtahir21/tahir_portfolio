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



    const professions = ["Frontend Developer", "Graphics Designer", "Wordpress Developer"];
    const professionElement = document.getElementById('profession');
    let currentIndex = 0;
    let currentText = '';
    let letterIndex = 0;
    let isDeleting = false;

    function typeWriterEffect() {
        const profession = professions[currentIndex];
        if (!isDeleting) {
            currentText = profession.substring(0, letterIndex + 1);
            professionElement.textContent = currentText;
            letterIndex++;
            if (currentText === profession) {
                isDeleting = true;
                setTimeout(typeWriterEffect, 1000); // Pause at the end of typing
            } else {
                setTimeout(typeWriterEffect, 100); // Typing speed
            }
        } else {
            currentText = profession.substring(0, letterIndex - 1);
            professionElement.textContent = currentText;
            letterIndex--;
            if (currentText === '') {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % professions.length;
            }
            setTimeout(typeWriterEffect, 50); // Deleting speed
        }
    }

    typeWriterEffect();


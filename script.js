document.addEventListener("DOMContentLoaded", function () {
          const burgerButton = document.querySelector(".hamburger-button");
          const burgerLinks = document.querySelector(".nav-links");
        
          burgerButton.addEventListener("click", function () {
            burgerLinks.classList.toggle("active");
          });
        });
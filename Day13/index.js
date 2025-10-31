 const imgs = document.querySelectorAll(".plus-symbol");

  imgs.forEach((img) => {
    img.addEventListener("click", () => {
      // Find the answer <p> inside the same container
      const answer = img.parentElement.querySelector(".answers");

      // Toggle the display style
      if (answer.style.display === "block") {
        answer.style.display = "none";
        answer.style.transition = "transform 0.3s ease"
      } else {
        answer.style.transition = "transform 0.3s ease"
        answer.style.display = "block";
      }
      img.classList.toggle("active");
    });
  });
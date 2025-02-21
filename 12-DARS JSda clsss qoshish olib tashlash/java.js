let darkModeBtn = document.querySelector(".btn");
let body = document.querySelector(".tana");
console.log(darkModeBtn);

darkModeBtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Light Mode";
    darkModeBtn.classList.add("light-mode"); // Add class
  } else {
    darkModeBtn.textContent = "Dark Mode";
    darkModeBtn.classList.remove("light-mode"); // Remove class
  }
});

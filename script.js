const toggleButton = document.querySelector(".toggle");
const navigation = document.querySelector("nav");

toggleButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});
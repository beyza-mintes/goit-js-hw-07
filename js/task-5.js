const button = document.querySelector(".change-color");
const colorText = document.querySelector(".color")

// Rastgele hex rengi üreten fonksiyon
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", () => {

  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  colorText.textContent = randomColor;
})







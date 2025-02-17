const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");


createButton.addEventListener("click", (event) => {
  let inputValue = input.value;

  if (inputValue < 1 || input > 100) {
    return;
  } // girilen değer 1 ile 100 arasında değilse çıkıyor.

  createBoxes(inputValue); // girilen değer geçerliyse createBoxes fonksiyonu çalışır.

  input.value = ""; // kullanıcının girdiği değer temizleniyor.
});



//--- KUTULARI OLUŞTURDUĞUMUZ FONKSİYON ----------------------------------
function createBoxes(amount) {
  // renkli kutuları ekleyeceğimiz div'i seçtik.
  const boxesContainer = document.getElementById("boxes");

  // mevcut kutuları temizliyoruz. (boxes div'ini boşalttık)
  boxesContainer.innerHTML = "";

  // ilk karenin boyutu
  let size = 30;

  // istenen sayıda kutu oluşturmak için döngü başlatıyoruz
  for (let i = 0; i < amount; i++) {

    const box = document.createElement("div"); // kutular için div ögesi oluşturuyoruz

    // kutuların boyutunu ayarlıyoruz.
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";

    // oluşturulan kutuları boxes div'ine ekliyoruz.
    boxesContainer.appendChild(box);

    size += 10; // (sonraki kutunun boyu 10px artacak)
  }
}



// kutuları silmek için fonksiyon tanımlıyoruz
function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ""; // mevcut tüm kutular silinir
}

destroyButton.addEventListener("click", () => {
  destroyBoxes();
}) // destroy butonuna tıklandığında kutular siliniyor.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

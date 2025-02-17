const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const gallery = document.querySelector(".gallery");

let galleryItems = ''; // boş bir string oluşturduk. bu string li ögelerini ve içindeki img etiketlerini depolamak için kullanılacak. (düz tırnak = string oluşturur)

images.forEach(image => {
  galleryItems += `<li><img src="${image.url}" alt="${image.alt}"/></li>`;
}); // images dizisindeki nesneleri döngüye aldık. galleryItems'a ekledik.

gallery.insertAdjacentHTML("beforeend", galleryItems); // galleryItems stringi tek seferde DOM'a ekleniyor.

//css
gallery.style.display = "flex"
gallery.style.flexWrap = "wrap"
gallery.style.rowGap = "48px"
gallery.style.columnGap = "24px"
gallery.style.listStyleType = "none"
gallery.style.flexWrap = "wrap"
gallery.style.padding = "0px"
gallery.style.margin = "0px"

const listItems = document.querySelectorAll(".gallery li");
const imgElements = document.querySelectorAll(".gallery img");

listItems.forEach(item => {
  item.style.width = "360px"
  item.style.height = "300px"
});

imgElements.forEach(image => {
  image.style.maxWidth = "100%";
  image.style.height = "auto";
});










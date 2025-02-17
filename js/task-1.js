const items = document.querySelectorAll(".item")
// console.log(items.length);
console.log(`Number of categories: ${items.length}`);

items.forEach(element => {
    const title = element.querySelector("h2").textContent;

    const elementsCount = element.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);

});

// CSS
const categories = document.querySelector("#categories");
categories.style.listStyleType = "none"
categories.style.width = "360px"
categories.style.padding = "0px"
categories.style.margin = "30px"

const itemsUl = document.querySelectorAll(".item ul");
const itemsLi = document.querySelectorAll(".item li");

itemsUl.forEach(ul => {
    ul.style.display = "flex";
    ul.style.flexDirection = "column";
    ul.style.gap = "8px";
    ul.style.listStyleType = "none";
    ul.style.padding = "0px";
});

itemsLi.forEach(li => {
    li.style.padding = "4px";
    li.style.width = "360px";
    li.style.height = "40px";
    li.style.border = "2px solid #808080";
    li.style.borderRadius = "8px";
    li.fontSize = "16px";
    li.fontWeight = "400";
    li.style.alignItems = "center";
});



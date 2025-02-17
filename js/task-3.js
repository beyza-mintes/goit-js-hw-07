const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener('input', () => {
    const trimmedName = nameInput.value.trim(); // kullanıcının girdiği değerde boşluklar varsa temizleniyor.

    if (trimmedName === "") {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = trimmedName;
    }

});

// CSS
const inputArea = document.querySelector("input")
inputArea.style.width = "360px"
inputArea.style.height = "40px"
inputArea.style.backgroundColor = "transparent"
inputArea.style.borderRadius = "5px"
inputArea.style.border = "2px solid #808080"
inputArea.style.padding = "8px 140px 8px 16px"

const text = document.querySelector("h1")
text.style.color = "#2E2F42"
text.style.fontSize = "24px"
text.style.fontWeight = "600"
text.style.letterSpacing = "0.04em"
text.style.lineHeight = "1,33"

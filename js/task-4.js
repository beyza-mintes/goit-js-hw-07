const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (email === "" || password === "") {
        alert("All form fields must be filled in")
        return;
    }

    console.log(`Email:${email}, Password:${password}`);

    loginForm.reset();

});

//CSS
const submitButton = document.querySelector("button");
submitButton.style.backgroundColor = "#4E75FF"
submitButton.style.border = "1px solid #4E75FF"
submitButton.style.borderRadius = "8px"
submitButton.style.width = "86px"
submitButton.style.height = "40px"
submitButton.style.color = "#FFFFFF"

loginForm.style.display = "flex"
loginForm.style.flexDirection = "column"
loginForm.style.gap = "15px"

const firstInput = document.querySelector("input")
firstInput.style.marginLeft = "28px"



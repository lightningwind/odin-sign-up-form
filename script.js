// Grab references to needed elements
const formEle = document.querySelector("form");
const submitButton = document.querySelector(".btn");
const passwordInputEle = document.querySelector("#pwd");
const confirmPasswordInputEle = document.querySelector("#confirmPwd");
const errorMessage = document.querySelector(".error-msg");

const ERROR_TEXT = "*Passwords do not match";

// Define and implement callback functions
const handleFormSubmit = e => {
    e.preventDefault(); 
    if (passwordInputEle.value !== confirmPasswordInputEle.value) {
        passwordInputEle.classList.add("error");
        confirmPasswordInputEle.classList.add("error");
        errorMessage.textContent = ERROR_TEXT; 
        return; 
    }
    errorMessage.textContent = "*Form submitted successfully!";
    setTimeout(() => {
        window.location.reload(); 
    }, 5000);
    
}

// Listen for events 
formEle.addEventListener("submit", handleFormSubmit);
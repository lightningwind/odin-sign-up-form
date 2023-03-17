const btn = document.querySelector(".btn");
const pwdInputEle = document.querySelector("#pwd");
const confirmPwdInputEle = document.querySelector("#confirmPwd");
const paraErrorEle = document.querySelector(".error-msg");

function handleFormSubmit(e) {
    console.log("Form submitted successfully!");
}

btn.addEventListener("submit", handleFormSubmit); 
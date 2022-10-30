// import throttle from "lodash.throttle";
import "lodash.throttle";
import throttle from "lodash.throttle";

const KEY_TEXT_SAVE = "feedback-form-state";

const formRef = document.querySelector(".feedback-form");
const inputEmailRef = formRef.querySelector("[name=email]");
const inputMessageRef = formRef.querySelector("[name=message]");
// console.log("🚀formRef", formRef)
// console.log("🚀inputEmailRef", inputEmailRef);
// console.log("🚀inputMessageRef", inputMessageRef);
let baseDate = {
    email: "",
    message: ""
};

let typeError = "";

formRef.addEventListener("input", throttle(saveText, 500));
formRef.addEventListener("submit", btnClick)

function btnClick (e) {
    e.preventDefault();
    localStorage.removeItem(KEY_TEXT_SAVE);

    inputEmailRef.value = "";
    inputMessageRef.value = "";

    console.log(baseDate)
}

function saveText (e) {
    baseDate = {
        email: inputEmailRef.value,
        message: inputMessageRef.value
    }

    // console.log("🚀baseDate", baseDate)

    localStorage.setItem(KEY_TEXT_SAVE, JSON.stringify(baseDate));
    // console.log(JSON.parse(localStorage.getItem(KEY_TEXT_SAVE)))
}

try {
    JSON.parse(localStorage.getItem(KEY_TEXT_SAVE)).email;
} catch (error) {
    typeError = error.name
}

if(typeError === "") {
    if(inputEmailRef.value !== " ") {
        inputEmailRef.value = JSON.parse(localStorage.getItem(KEY_TEXT_SAVE)).email;
    } 
    if (inputEmailRef.value !== " ") {
        inputMessageRef.value = JSON.parse(localStorage.getItem(KEY_TEXT_SAVE)).message;
    }
}


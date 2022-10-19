window.onload = function () {
    let formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    isPresent("first-name", "First name is required");
    isPresent("last-name", "Last name is required");
}
function isPresent(id, errMsg) {
    let inputBox = document.getElementById(id);
    let inputValue = inputBox.value;
    if (inputValue == "") {
        let errSpan = inputBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
function isEmailValid(email) {
    if (!email.includes("@")) {
        return false;
    }
}

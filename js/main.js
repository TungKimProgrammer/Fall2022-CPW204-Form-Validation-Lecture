window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    isPresent("first-name", "First name is required");
    isPresent("last-name", "Last name is required");
}
function isPresent(id, errMsg) {
    var inputBox = document.getElementById(id);
    var inputValue = inputBox.value;
    if (inputValue == "") {
        var errSpan = inputBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}

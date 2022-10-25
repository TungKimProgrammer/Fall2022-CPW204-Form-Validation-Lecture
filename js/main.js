window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrMessage();
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
function isValidDate(input) {
}
function resetErrMessage() {
    var allSpan = document.querySelectorAll("form span");
    for (var i = 0; i < allSpan.length; i++) {
        var currSpan = allSpan[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}

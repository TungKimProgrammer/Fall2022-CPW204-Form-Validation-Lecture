window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrMessage();
    isPresent("first-name", "First name is required");
    isPresent("last-name", "Last name is required");
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isValidDate(dob)) {
        var errSpan = dobBox.nextElementSibling;
        errSpan.innerHTML = "Format should be mm/dd/yyyy";
    }
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
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    var result = pattern.test(input);
    return result;
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

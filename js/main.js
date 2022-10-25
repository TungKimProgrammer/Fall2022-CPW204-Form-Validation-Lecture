window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function changeHeading() {
    var heading = this;
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);
    var color = "rgb(" + red + "," + green + "," + blue + ")";
    heading.style.color = color;
}
function main() {
    var msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing Form";
    msgHeading.setAttribute("class", "message");
    msgHeading.onclick = changeHeading;
    var h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);
    setTimeout(function () {
        msgHeading.remove();
    }, 3000);
    resetErrMessage();
    isPresent("first-name", "First name is required");
    isPresent("last-name", "Last name is required");
    checkValidDate();
}
function checkValidDate() {
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

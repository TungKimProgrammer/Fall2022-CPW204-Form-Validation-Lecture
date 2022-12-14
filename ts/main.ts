window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

/**
 * change the message heading color every time it's clicked
 */
function changeHeading(){
    let heading = <HTMLElement>this;
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    let color = "rgb(" + red + "," + green + "," + blue +")";
    heading.style.color = color;
}

function main():void {
    let msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing Form";
    msgHeading.setAttribute("class", "message");
    msgHeading.onclick = changeHeading;

    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);

    setTimeout(function(){
        msgHeading.remove();
    }, 3000)

    resetErrMessage();
    isPresent("first-name", "First name is required");
    isPresent("last-name", "Last name is required");

    // validate Date
    checkValidDate();
}

/**
 * 
 */
function checkValidDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        let errSpan = dobBox.nextElementSibling;
        errSpan.innerHTML = "Format should be mm/dd/yyyy";
    }
}

/**
 * returns true if the textbox with the given id has some text inside
 * @param id the id of the <input type="text"> to validate
 * @param errMsg message to display in the sibling span of the textbox
 * @returns 
 */
function isPresent(id: string, errMsg: string):boolean {
    let inputBox = <HTMLInputElement>document.getElementById(id);
    let inputValue = inputBox.value;
    if (inputValue == "") {
        let errSpan = <HTMLSpanElement>inputBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}

/**
 * 
 * @param input 
 * @returns 
 */
function isValidDate(input: string):boolean{
    // Validating mm/dd/yyyy or m/d/yyyy
    // \d{1,2}\/d{1,2}\/d{4}
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    let result = pattern.test(input);
    return result;
}

/**
 * Reset all the spans back to default text
 */
function resetErrMessage():void{
    let allSpan = document.querySelectorAll("form span");
    for (let i = 0; i < allSpan.length; i++){
        let currSpan = <HTMLElement>allSpan[i];
        if (currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }
        else{
            currSpan.innerText = "";
        }
    }
}
/*
function isEmailValid(email:string) {
    if (!email.includes("@")) { // needs change "target": "ES5" to later version
        return false;
    }
}
*/
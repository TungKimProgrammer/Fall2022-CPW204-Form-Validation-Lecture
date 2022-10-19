window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    isPresent("first-name", "First name is required");
    isPresent("last-name", "Last name is required");
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

function isEmailValid(email:string) {
    if (!email.includes("@")) { // needs change "target": "ES5" to later version
        return false;
    }
}
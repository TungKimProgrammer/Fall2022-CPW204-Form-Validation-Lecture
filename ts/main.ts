window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    resetErrMessage();
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
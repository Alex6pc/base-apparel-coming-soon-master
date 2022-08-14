const input = document.getElementById("email");
const button = document.getElementById("submit");
const error = document.getElementById("errorMsg");
const errorSym = document.getElementById("errorPhoto")
const nothing = "";

button.addEventListener("click" , changeBorder);

function changeBorder(){
var regex_pattern =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value == nothing){
        input.style.border = "2px solid red";
        errorSym.style.display = "unset";
        error.style.display = "unset";
    }
    else if(input.value.match(regex_pattern)){
        input.value = "Thank's for your Email";
        input.style.border = "2px solid green";
        errorSym.style.display = "none";
        error.style.display = "none";
    }
    else{
        input.style.border = "2px solid red";
        errorSym.style.display = "unset";
        error.style.display = "unset";
    }
}


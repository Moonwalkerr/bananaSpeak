var transButton = document.querySelector("#click-btn");
var textInput = document.querySelector("#text-input");


var output = document.querySelector("#output");


transButton.addEventListener("click",function click(){
    console.log("Clicked");
    
output.innerHTML = textInput.value;

});

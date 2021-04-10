var transButton = document.querySelector("#click-btn");
var textInput = document.querySelector("#text-input");


var output = document.querySelector("#output");

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTransUrl(text) {
    return serverUrl + "?" + "text=" + text;
}


function errorHandler(err) {
    console.log("error occurred: " + err);
    alert("Something wrong with Server");
}

transButton.addEventListener("click", function click() {

     // taking input
     var inputText = textInput.value;

    // calling the server
    fetch(getTransUrl(inputText))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated))
        .catch(errorHandler)


    // console.log("Clicked");

    // output.innerHTML = textInput.value;

});
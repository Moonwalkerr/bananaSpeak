var transButton = document.querySelector("#click-btn");
function clickCallback()
{
    console.log("clicked");
}
transButton.addEventListener("click",clickCallback());
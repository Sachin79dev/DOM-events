const btn = document.querySelector("#btn");

const newText = document.createElement("p");
newText.innerText = "You Clicked Me!!!!";

btn.addEventListener('click', function() {
    document.body.appendChild(newText);
});
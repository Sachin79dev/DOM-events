const form = document.querySelector("#submitform");
const input = document.querySelector("#task-list");
const list = document.querySelector("#tasks");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const catName = input.value;
    const newli = document.createelement("li");
    newli.innerText = catName;
    list.append(newli);
    input.value = "";
});
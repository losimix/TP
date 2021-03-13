todo = document.querySelector("#ToDo");
todo.addEventListener('click', submit, false);
function submit(event) {
    i1 = document.querySelector("#input1");
    i2 = document.querySelector("#input2");
    var tag = document.createElement("p");
    var text = document.createTextNode(i1.value+":"+i2.value);
    tag.appendChild(text);
    var element = document.querySelector("td");
    element.appendChild(tag);
}
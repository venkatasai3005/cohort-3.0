let currentIndex = 1;
function addTodo() {
  const inputEl = document.querySelector("input");
  const textNode = document.createElement("div");
  textNode.innerHTML = "<div id='todo-" + currentIndex + "'><h4>" + inputEl.value + '</h4><button onclick="deleteTodo(' + currentIndex + ') ">Delete</button>';
  const parentEl = document.getElementById("todo-container");
  parentEl.appendChild(textNode);

  currentIndex = currentIndex + 1;
}

function deleteTodo(index){
    const element = document.getElementById("todo-"+index);
    element.parentNode.removeChild(element)
}
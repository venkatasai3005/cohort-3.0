
function Timers(){

let ctr = 0;
function Timer(){
    document.querySelectorAll("h4")[1].innerHTML=ctr;
    ctr=ctr+1;
}
setInterval(Timer,1000);
}

function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
  }

function addTodo(){
    const content = document.querySelector("input").value
    let new_div=document.createElement("div");
    new_div.textContent=content
    document.querySelector("body").appendChild(new_div);
}
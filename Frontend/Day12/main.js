//Selectors

const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoBtn.addEventListener("click", addTodo);

//Functions
function addTodo(event) {
  event.preventDefault();

  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create LI
  const newsTodo = document.createElement("li");
  newsTodo.innerText = todoInput.value;
  newsTodo.classList.add("todo-item");
  todoDiv.appendChild(newsTodo);

  //Completed button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class='fas fa-check'></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class='fas fa-trash'></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to the UL

  todoList.appendChild(todoDiv);

  //clear todo INPUT value
  todoInput.value = "";
}

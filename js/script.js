let $ = document;
let inputTag = $.querySelector("input");
inputTag.placeholder = "Write Your Task...";
let addTodoForm = $.querySelector(".add");
let ulList = $.querySelector("ul");
addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
// ADD Todo Item
function addNewTodo(todoValue) {
  let newTodoList = $.createElement("li");
  newTodoList.className =
    "list-group-item d-flex justify-content-between align-items-center my-1";
  let newTodoSpan = $.createElement("span");
  newTodoSpan.innerHTML = todoValue;
  let newTodoTrash = $.createElement("i");
  newTodoTrash.className = "fa fa-trash-o delete";
  newTodoList.append(newTodoSpan, newTodoTrash);
  ulList.append(newTodoList);

  newTodoTrash.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
}
// Remove Todo Item

inputTag.addEventListener("keyup", (e) => {
  let newTodoValue = e.target.value.trim();
  //   console.log(newTodoValue);
  if (e.keyCode === 13) {
    if (newTodoValue) {
      inputTag.value = "";
      addNewTodo(newTodoValue);
    }
  }
});

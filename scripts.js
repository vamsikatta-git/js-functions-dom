const todo = document.getElementById("todo");
const btn = document.getElementById("btn");
const output = document.getElementById("list")
btn.addEventListener("click",getInp);

function getInp(e)
{
  e.preventDefault();
  let value = todo.value;
  const listItem = document.createElement("li");
   listItem.innerHTML = `<span>${value}</span> <button class="delete-item"><img src="./cancel.svg" ></button>`
  output.appendChild(listItem);
  todo.value = "";
  const deleteItem = listItem.querySelector(".delete-item");
  deleteItem.addEventListener('click',()=>{
    listItem.remove();
  })
}


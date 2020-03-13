/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/


let todoList = document.getElementById('todo-list');
var button = document.getElementById('add-button');
let input = document.getElementById('description');
let ul = document.getElementById('todo-list');
var deleteBtn = document.querySelector('.delete')

button.onclick = function(){
console.log(input.value);
var newElement = document.createElement('li');
newElement.innerHTML = input.value;
newElement.classList.add('li');
todoList.appendChild(newElement);
};

// delete items
deleteBtn.addEventListener('click', function(){
    localStorage.setItem('todo-list', ul.innerHTML);
});


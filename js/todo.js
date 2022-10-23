const toDoForm  = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList  = document.getElementById("todo-list");

const TODOS_KEY = "toDos"

let toDos = [];

/**입력하고 저장된 Todos */
function saveToDos () {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
/**저장된 Todos 지우기 */
function deleteToDo(event) {
    const li = event.target.parentElement;    
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}
/**입력한Todos 화면에 출력*/
function paintTodo(newToDo){

    const li = document.createElement("li");
    li.id = newToDo.id;

    const span = document.createElement("span");
    span.innerText = newToDo.text;

    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

/**입력한Todos 화면에 출력*/
function handleToDoSubmit (event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos ();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

const handleTodoList =  document.querySelector('.see-todo__btn');
const toDoFormHidden = document.querySelector('#todo-form__hidden');

function handleTodoListTog(){
    toDoFormHidden.classList.toggle('hidden');
}


handleTodoList.addEventListener('click',handleTodoListTog);
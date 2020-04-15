var listElement = document.querySelector('.app ul');
var inputElement = document.querySelector('.app input');
var btnElement = document.querySelector('.app button');

var ToDo = JSON.parse(localStorage.getItem('list_todos') || []);

function renderTodo() {
  listElement.innerHTML = '';
  
  for(Todos of ToDo){
    var TodoElement = document.createElement('li');
    var ToDoText = document.createTextNode(Todos);
    
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    
    var pos = ToDo.indexOf(Todos);
    linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')
    
    var linkText = document.createTextNode('Excluir');
    
    linkElement.appendChild(linkText);
    
    TodoElement.appendChild(ToDoText);
    TodoElement.appendChild(linkElement);
    
    listElement.appendChild(TodoElement);
  }
}

renderTodo();

function addTodo() {
  var ToDoText = inputElement.value;
  if(ToDoText == ''){
    alert('Adicione algo!')
  }else{
  ToDo.push(ToDoText);
  inputElement.value = '';
  renderTodo();
  storageTodo();
  }
}

btnElement.onclick = addTodo;

function deleteTodo(pos) {
  ToDo.splice(pos, 1);
  renderTodo();
  storageTodo()
}

function storageTodo() {
  localStorage.setItem('list_todos', JSON.stringify(ToDo));
}
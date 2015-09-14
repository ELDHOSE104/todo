var todos = ['todo 1', 'todo 2', 'todo 3'];
var todoElement = document.getElementById('todoList');

var loadTodo = function(){
  todoElement.innerHTML = '';
  for(var i = 0; i<todos.length; i++){
    todoElement.innerHTML += i+1 + ". " + todos[i] + "<br/>";
  }
};

var addTodo = function(){
  var todoItem = prompt("To Add?");
  todos.push(todoItem);
  loadTodo();
};

var removeTodo = function(){
  var todoItemDone = prompt("Task to remove");
  todos.splice(todoItemDone-1,1);
  loadTodo();
}

loadTodo();
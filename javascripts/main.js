$(function(){
  var $todoInput = $("[data-js='type--here']");
  var $form = $("[data-js='form']");
  var $todoList = $("[data-js'todo-list]");
  var $selectTodo = [];

  $form.on("submit", function(e){
    e.preventDefault();
  })
  $todoInput.on("keyup", function(e){
    console.log(e);
  })
});

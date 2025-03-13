const todoList = [{
  name: 'eat food', 
  date: '2022-12-22'
}, {
  name: 'sell product', 
  date: '2022-12-23'
}];

renderTodoList();
function renderTodoList(){
 let todoListHTML= '';

  for(let i = 0; i < todoList.length; i++) {

  const todoObject = todoList[i];
  //const name = todoObject.name;
  //const date = todoObject.date;
  const {name, date} = todoObject;
  //Generate the HTML with JS 
  const html = `
  <div>${name}</div>
  <div>${date}</div>
  <button onclick="
  todoList.splice(${i}, 1);
  renderTodoList()
  " class="delete-button">Delete</button>`;

  todoListHTML += html;
  }
  //console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addToDo(){
  const inputElementName = document.querySelector('.js-name-input');
  const name = inputElementName.value;

  const inputElementDate = document.querySelector('.js-date-input');
  const date = inputElementDate.value;
 // console.log(name);
  //console.log(date);
  todoList.push({
    name:name,
    date:date
});
  
  //console.log(todoList);
  inputElementName.value = '';
  renderTodoList();
}


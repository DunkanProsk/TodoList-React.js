import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/AddTodo';

function App() {
  const [todoList, setTodoList] = React.useState([
    { id: 1, completed: false, title: 'buy apples' },
    { id: 2, completed: false, title: 'buy bananas' },
    { id: 3, completed: false, title: 'buy paper' },
  ])

  function toggleTodo(id) {
    setTodoList(
      todoList.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        };
        return todo;
      })
    )
  };

  function removeTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  function addTodo(title) {
    setTodoList(todoList.concat([{
      title,
      id: Date.now(),
      completed: false,
    }]));
  };

  function valComp() {
    let val = 0;
    for(let i = 0; i < todoList.length; i++) {
      if (todoList[i].completed === true) ++val;
    };
    return val;
  };

  return (
    <div className='wrapper'>
      <h1>To-Do List</h1>
      <AddTodo onCreate={addTodo}/>
      <p 
      align='center'
      className='stat'
      >Total: {todoList.length} &nbsp; &nbsp; Completed: {valComp()}</p>
      {todoList.length
        ? <TodoList
          todo={todoList}
          onToggle={toggleTodo}
          removeTodo={removeTodo}
          /> 
        : <p align='center'>no todos</p>
      }
    </div>
  );
};

export default App;

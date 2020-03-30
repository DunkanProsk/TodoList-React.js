import React from 'react';
import TodoList from './Todo/TodoList';
import AddTodo from './Todo/AddTodo';

const styles = {
  body: {
    padding: "1rem 3rem",
    margin: "0 auto",
    width: "600px",
  },

  body__title: {
    color: '#BABECC',
    textShadow: '1px 1px 1px #ffffff',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '40px',
  },

  body__text: {
    textAlign: 'center',
    marginBottom: '20px',
  },

};

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
    <div style={styles.body}>
      <h1 style={styles.body__title}>To-Do List</h1>
      <AddTodo onCreate={addTodo}/>
      <p style={styles.body__text}>
        Total: {todoList.length} &nbsp; &nbsp; Completed: {valComp()}
      </p>
      {todoList.length
        ? <TodoList
          todo={todoList}
          onToggle={toggleTodo}
          removeTodo={removeTodo}
          /> 
        : <p style={styles.body__text}>no todos</p>
      }
    </div>
  );
};

export default App;

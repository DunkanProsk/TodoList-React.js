import React from 'react';
import TodoList from './Todo/TodoList';
import AddTodo from './Todo/AddTodo';
import TodoFilter from './Todo/TodoFilter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { id: 1, completed: false, title: 'buy apples' },
        { id: 2, completed: true, title: 'buy bananas' },
        { id: 3, completed: false, title: 'buy paper' },
      ],
      filter: 1,
    };

    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.checkFilter = this.checkFilter.bind(this);
  }

  styles = {
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
  }

  toggleTodo(id) {
    const newTodos = this.state.todoList.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      };
      return todo;
    });

    this.setState({
      todoList: newTodos
    });
  }

  removeTodo(id) {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== id)
    });
  }

  addTodo(title) {
    this.setState({
      todoList: this.state.todoList.concat([{
        title,
        id: Date.now(),
        completed: false,
      }])
    });
  }

  checkFilter(value) {
    switch(value) {
        case 1:
            this.setState({filter: 1});
            document.querySelector('#allButton').className = 'body__buttonFilAct';
            document.querySelector('#activeButton').className = 'body__buttonFil';
            document.querySelector('#completedButton').className = 'body__buttonFil';
            break;
        case 2:
            this.setState({filter: 2});
            document.querySelector('#allButton').className = 'body__buttonFil';
            document.querySelector('#activeButton').className = 'body__buttonFilAct';
            document.querySelector('#completedButton').className = 'body__buttonFil';
            break;
        case 3:
            this.setState({filter: 3});
            document.querySelector('#allButton').className = 'body__buttonFil';
            document.querySelector('#activeButton').className = 'body__buttonFil';
            document.querySelector('#completedButton').className = 'body__buttonFilAct';
            break;
    };
  };


  valComp() {
    let val = 0;
    for(let i = 0; i < this.state.todoList.length; i++) {
      if (this.state.todoList[i].completed === true) ++val;
    };
    return val;
  }

  valActive() {
    let val = 0;
    for(let i = 0; i < this.state.todoList.length; i++) {
      if (this.state.todoList[i].completed === false) ++val;
    };
    return val;
  }

  render() {
    return (
      <div style={this.styles.body}>
        <h1 style={this.styles.body__title}>To-Do List</h1>
        <AddTodo onCreate={this.addTodo}/>
        <p style={this.styles.body__text}>
          All: {this.state.todoList.length} &nbsp; &nbsp;
          Active: {this.valActive()} &nbsp; &nbsp;
          Completed: {this.valComp()}
        </p>
        {this.state.todoList.length
          ? <TodoList
            todo={this.state.todoList}
            onToggle={this.toggleTodo}
            filter={this.state.filter}
            removeTodo={this.removeTodo}
            /> 
          : <p style={this.styles.body__text}>no todos</p>
        }
        <TodoFilter todo={this.state.todoList} filter={this.checkFilter}/>
      </div>
    );
  }
};

export default App;

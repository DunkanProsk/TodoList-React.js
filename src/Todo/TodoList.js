import React from 'react';
import TodoItem from './TodoItem';
import { render } from '@testing-library/react';

const styles = {
    body__ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
};

export default function TodoList(props) {
    return (
        <ul style={styles.body__ul}>
            {props.todo.map((todo, index) => {
                if(props.filter === 1) {
                    return <TodoItem 
                        removeTodo={props.removeTodo}
                        todo={todo}
                        filter={props.filter}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle}
                    />
                };

                if(props.filter === 2) {
                    if(todo.completed === false) {
                        return <TodoItem 
                            removeTodo={props.removeTodo}
                            todo={todo}
                            filter={props.filter}
                            key={todo.id}
                            index={index}
                            onChange={props.onToggle}
                        />
                    };
                };
                
                if(props.filter === 3) {
                    if(todo.completed === true) {
                        return <TodoItem 
                            removeTodo={props.removeTodo}
                            todo={todo}
                            filter={props.filter}
                            key={todo.id}
                            index={index}
                            onChange={props.onToggle}
                        />
                    };
                };
            }) }
        </ul>
    );
};
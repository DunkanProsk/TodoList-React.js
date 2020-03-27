import React, {useContext} from "react"
import Context from '../context'

const styles = {
    input: {
        marginTop: '0',
        marginRight: '1rem',
    },

    span: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        outline: 'none',
    },
};

export default function TodoItem({ todo, index, onChange}) {
    const { removeTodo } = useContext(Context);
    const classes = [];

    if(todo.completed) {
        classes.push('done');
    };

    return (
    <li style={styles.li}>
        <span className={classes.join(' ')} style={styles.span}>
            <input 
            type='checkbox'
            checked={todo.completed}
            style={styles.input} onChange={() => onChange(todo.id)}
            />
            { todo.title }  
        </span>

        <button 
        className='rm' 
        onClick={() => {removeTodo(todo.id)}}
        >&times;</button>
    </li>
    )
}
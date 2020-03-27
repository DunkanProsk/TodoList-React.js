import React, {useContext} from "react"

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

export default function TodoItem(props) {
    const classes = [];

    if(props.todo.completed) {
        classes.push('done');
    };

    return (
    <li style={styles.li}>
        <span className={classes.join(' ')} style={styles.span}>
            <input 
            type='checkbox'
            checked={props.todo.completed}
            style={styles.input} onChange={() => props.onChange(props.todo.id)}
            />
            { props.todo.title }  
        </span>

        <button 
        className='rm' 
        onClick={() => {props.removeTodo(props.todo.id)}}
        >&times;</button>
    </li>
    )
}
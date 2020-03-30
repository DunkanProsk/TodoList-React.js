import React from "react"

const styles = {
    body__span: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    span__chechbox: {
        marginTop: '0',
        marginRight: '1rem',
        textDecoration: 'line-through',
    },

    body__li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1rem',
        border: '0px solid',
        borderRadius: '15px',
        background: '#EBECF0',
        marginBottom: '1.5rem',
        transition: '0.4s',
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
    <li style={styles.body__li}>
        <span className={classes.join(' ')} style={styles.body__span}>
            <input 
                type='checkbox'
                checked={props.todo.completed}
                style={styles.span__chechbox}
                onChange={() => props.onChange(props.todo.id)}
            />
            { props.todo.title }  
        </span>

        <button 
        className='body__button--remove' 
        onClick={() => {props.removeTodo(props.todo.id)}}
        >&times;</button>
    </li>
    )
}
import React, {useState} from 'react'

const styles = {
    body__form: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },

    body__input: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0',
        outline: '0',
        fontSize: '16px',
        borderRadius: '15px',
        padding: '16px',
        marginRight: '20px',
        backgroundColor: '#EBECF0',
        textShadow: '1px 1px 0 #ffffff',
        width: '80%',
        boxSizing: 'border-box',
        transition: 'all 0.2s ease-in-out',
        appearance: 'none',
    },

    body__button: {
        border: '0',
        outline: '0',
        fontSize: '16px',
        borderRadius: '15px',
        padding: '16px',
        borderRadius: '15px',
        backgroundColor: '#EBECF0',
        textShadow: '1px 1px 0 #ffffff',
        width: '15%',
        boxSizing: 'border-box',
        transition: 'all 0.2s ease-in-out',
        appearance: 'none',
        color: '#61677C',
        fontWeight: 'bold',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
        fontWeight: '600',
    },
};

function AddTodo(props) {
    const [value, setValue] = useState('');

    function submitHandler(event) {
        event.preventDefault();

        if(value.trim()) {
            props.onCreate(value);
            setValue('');
        };
    };

    return (
        <form style={styles.body__form} onSubmit={submitHandler}>
            <input
                value={value}
                onChange={event => setValue(event.target.value)}
                style={styles.body__input}
                className='body__input'
            />
            <button
                type='submit'
                style={styles.body__button}
                className='body__button'
            >ADD</button>
        </form>
    );
};

export default AddTodo
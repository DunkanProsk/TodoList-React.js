import React, {useState} from 'react'

const styles = {
    form: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
}

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
        <form style={styles.form} onSubmit={submitHandler}>
            <input
                value={value}
                onChange={event => setValue(event.target.value)}
                className='inputTodo'
            />
            <button type='submit' className='buttonAdd'>Add</button>
        </form>
    );
};

export default AddTodo
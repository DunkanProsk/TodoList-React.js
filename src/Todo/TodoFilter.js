import React from "react"

const styles = {
    body__filter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    body__button: {
        fontFamily: 'Comfortaa, cursive',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px  30px',
        border: '0',
        outline: '0',
        fontSize: '12px',
        padding: '12px',
        borderRadius: '12px',
        backgroundColor: '#EBECF0',
        textShadow: '1px 1px 0 #ffffff',
        width: '15%',
        boxSizing: 'border-box',
        appearance: 'none',
        color: '#61677C',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
        fontWeight: '400',
    },
};

export default function TodoFilter(props) {
    return (
        <div style={styles.body__filter}>
            <button 
                style={styles.body__button}
                id='allButton'
                className='body__buttonFilAct'
                onClick={() => {props.filter(1)}}
                >All
            </button>
            <button 
                style={styles.body__button}
                id='activeButton'
                className='body__buttonFil'
                onClick={() => {props.filter(2)}}
                >Active
            </button>
            <button 
                style={styles.body__button}
                id='completedButton'
                className='body__buttonFil'
                onClick={() => {props.filter(3)}}
                >Completed
            </button>
        </div>
    );
}
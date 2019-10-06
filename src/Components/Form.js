import React from 'react'
const Form = (props) =>{
    return(
        <form onSubmit={props.submit}>
            <input type="text"
            onChange={props.onChange}
            value = {props.value}
            placeholder = "Type your city here..."
            />
            <button>Check weather</button>
        </form>
    );
}

export default Form;
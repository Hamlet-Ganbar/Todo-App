import React, { useState } from 'react'
import "./TodoForm.css"
import { nanoid } from "nanoid"

const TodoForm = ({ list, setList }) => {

    const [value, setValue] = useState({
        text: "",
        id: ""
    })

    const inputHandler = (e) => {
        setValue({ ...value, text: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        if(value.text){
            setList([...list, { ...value, id: nanoid() }])
            setValue({
                text: "",
                id: ""
            })
        }
    }

    return (

        <div className='form-div'>
            <form onSubmit={submitHandler}>                
                <input
                    value={value.text}
                    className='form-input'
                    type="text"
                    placeholder='write your target...'
                    onChange={inputHandler}
                />
                <button className='form-button' type='submit'> ADD </button>
            </form>



        </div>
    )
}

export default TodoForm
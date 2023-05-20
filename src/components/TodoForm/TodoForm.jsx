import React, { useContext, useState } from 'react'
import "./TodoForm.css"
import { nanoid } from "nanoid"
import { TodoContext } from '../Context'

const TodoForm = () => {
    const {setList} = useContext(TodoContext)

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
            let a = JSON.parse(localStorage.getItem('mylist'))
            a.push({ ...value, id: nanoid() })
            setList(a)
            localStorage.setItem('mylist', JSON.stringify(a))
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
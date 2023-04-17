import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

import "./TodoApp.css"

const TodoApp = () => {
  const [list, setList] = useState([])
  return (
    <div className='body'>
        <h1>TODO LIST</h1>

        <TodoForm list={list} setList={setList}/>
        <TodoList list = {list} setList={setList}/>
        

    </div>
  )
}

export default TodoApp
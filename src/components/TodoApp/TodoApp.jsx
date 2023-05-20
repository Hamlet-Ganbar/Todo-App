import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

import "./TodoApp.css"

const TodoApp = () => {

  return (
    <div className='body'>
        <h1>TODO LIST</h1>
        <TodoForm/>
        <TodoList/>
    </div>
  )
}

export default TodoApp
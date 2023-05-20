import React, { useContext } from 'react'
import ListItem from '../Listitem/Listitem'
import "./TodoList.css"
import { TodoContext } from '../Context'

const TodoList = () => {
    const {list} = useContext(TodoContext)
    return (
        <ol className='ordered'>
            {
                list.map((item) => <ListItem key={item.id} {...item} />)
            }
        </ol>

    )
}

export default TodoList
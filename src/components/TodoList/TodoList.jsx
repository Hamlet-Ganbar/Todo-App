import React from 'react'
import ListItem from '../Listitem/Listitem'
import "./TodoList.css"

const TodoList = ({ list, setList }) => {
    return (

        <ol>
            {
                list.map((item) => <ListItem key={item.id} {...item} list={list} setList={setList} />)
            }
        </ol>

    )
}

export default TodoList
import React, { useRef, useState } from 'react'
import "../Listitem/Listitem.css"
import { BiEdit } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"


function Listitem({ text, id, list, setList }) {

  const [edit, setEdit] = useState(true)

  const [itemValue, setItemValue] = useState(text)

  const deleteHandler = (key) => {
    const filteredList = list.filter(item => item.id !== key)
    setList(filteredList)
  }

  
  const editHandler = () => {
    setEdit(!edit)
  }
  
  const itemRef = useRef()
  const ready = () => {
    itemRef.current.classList.toggle("readyItem")
  }

  
  return (
    <li  >
      <input
        ref={itemRef}
        onDoubleClick={ready}
        value={itemValue}
        onChange={(e) => {setItemValue(e.target.value) }}
        type="text"
        readOnly={edit}
        className='listitem'
      />

      <button onClick={editHandler} className={edit? 'edit': 'edit editing'}><BiEdit /></button>

      <button onClick={() => deleteHandler(id)} className='delete'><BsTrash /></button>
      
    </li>
  )
}

export default Listitem





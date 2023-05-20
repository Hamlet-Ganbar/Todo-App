import React, { useContext, useState } from 'react'
import "../Listitem/Listitem.css"
import { BiEdit } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"
import { SiVerizon } from "react-icons/si"
import { TodoContext } from '../Context'
import { nanoid } from 'nanoid'


function Listitem({ text, id }) {

  const [edit, setEdit] = useState(true)
  const [itemValue, setItemValue] = useState(text)
  const [check, setCheck] = useState(false)

  const deleteHandler = (key) => {
    let a = JSON.parse(localStorage.getItem('mylist'))
    const filteredList = a.filter(item => item.id !== key)
    setList(filteredList)
    localStorage.setItem('mylist', JSON.stringify(filteredList))
  }



  const editHandler = () => {
    setEdit(false)
  }
  const editedHandler = (key) => {
    setEdit(true)
    let storageList = JSON.parse(localStorage.getItem('mylist'))

    let finded = storageList.find(item => item.id === key)
    finded.text = itemValue
    localStorage.setItem('mylist', JSON.stringify(storageList))
  }

  const ready = () => {
    setCheck(!check)
  }

  const { setList } = useContext(TodoContext)
  return (
    <li>
      <input className='checkbox' onChange={ready} type='checkbox' checked={check} />
      <input
        onDoubleClick={ready}
        value={itemValue}
        onChange={(e) => { setItemValue(e.target.value) }}
        type="text"
        readOnly={edit}
        className={check ? 'listitem readyItem' : 'listitem'}
      />

      {edit ? <button onClick={() => editHandler(id)} className={edit ? 'edit' : 'edit editing'}><BiEdit /></button> :
        <button onClick={() => editedHandler(id)} className={edit ? 'edit' : 'edit editing'}><SiVerizon /></button>
      }

      <button onClick={() => deleteHandler(id)} className='delete'><BsTrash /></button>

    </li>
  )
}

export default Listitem





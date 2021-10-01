import reactDom from 'react-dom'
import todostyles from './todo.module.css'
import Todos from './todos'
import { useState } from "react";

const TodoList = () => {

  //  this is get the input here 
  const [inputList, setInputList] = useState('');

  // get the data from input using onclick 
  const [items, setItems] = useState([]);

  // This Is ItmeEvent Get Value From input and Run  
  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  // onclick funcation get the data from input and assign li
  const listofitmes = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    }
    )
    setInputList('')
  }


  // onClick deleteItmes Funcation 
  const deleteItmes = (id) => {
    console.log('delete')
    setItems((oldItems => {
      return oldItems.filter((aarElem, index) => {
        return index !== id;
      })
    }))
  }




  return (
    <div className={todostyles.todo__div}>
      <h1 className={todostyles.todo__head}>Todo List</h1>
      <input type="text" value={inputList} placeholder="Add Your Lists" onChange={itemEvent} className={todostyles.todo__inp} />

      <button className={todostyles.todo__button__1} onClick={listofitmes}>
        <i className="fas fa-plus"></i>
        </button>

      <ol>

        {
          items.map((allItemVal, index) => {
            return (
              <Todos text={allItemVal} key={index} id={index} onSelect={deleteItmes} />
            )
          }
          )
        }
      </ol>
    </div>
  )
}
export default TodoList
import React from 'react'
import todostyles from './todo.module.css'



const Todos = (props) => {

    return (
        <div className={todostyles.list__div}>
            <span className={todostyles.todo__button__2} onClick={() => { props.onSelect(props.id) } }>
            <i class="fas fa-trash"></i></span>
            <li className={todostyles.mylist}>{props.text}</li>
        </div>
    )
}
export default Todos


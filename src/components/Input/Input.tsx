import { faAngellist } from '@fortawesome/free-brands-svg-icons'
import { faRectangleList } from '@fortawesome/free-regular-svg-icons'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { TodoType } from '../../types/Todo'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todo.reducer'

const initialState:TodoType = {
  id: '',
  title: '',
  completed: false
}

const Input = () => {
  const [todo,setTodo] =useState<TodoType>(initialState);

  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleAddTodo = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(todo.title != '') {
      let newTodo = {...todo, id: new Date().toISOString(), title: todo.title.trim()};;

      if(newTodo.title.charAt(0) == ' ') {
        newTodo = {...newTodo, title: todo.title.slice(1, todo.title.length)}
      }
      dispatch(addTodo(newTodo));
      setTodo(initialState);
      if(inputRef.current) {
        inputRef.current.focus();
      }
    }
  }

  return (
    <form onSubmit={handleAddTodo} className='w-full bg-white flex mt-4'>
        <div className='w-full border-gray-500 border-[1px] rounded-md text-xl px-4'>
            <FontAwesomeIcon className="text-gray-400 mr-4 text-2xl" icon={faRectangleList} />
            <input ref={inputRef} id="todoInput" value={todo.title} placeholder='Add a new task' className='outline-none placeholder-gray-400 h-52c' onChange={e => setTodo(prev => ({...prev, title: e.target.value}))}/>
        </div>
        <button type='submit' className='px-2 ml-4 rounded-lg bg-sky-400 hover:bg-sky-300 text-white text-lg'>Add</button>
    </form>
  )
}

export default Input
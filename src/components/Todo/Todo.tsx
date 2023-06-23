import React, { useEffect, useRef, useState } from 'react'
import { TodoType } from "../../types/Todo"
import { useDispatch } from 'react-redux';
import { deleteTodo, updateCompleted, updateTodo } from '../../redux/todo.reducer';

interface myTodoType {
  todos: TodoType
}

const Todo:React.FC<myTodoType> = ({ todos }) => {
  const [completed, setCompleted] = useState<boolean>(todos.completed);
  const [updateInputBtn, setUpdateInputBtn] = useState<boolean>(true);
  const [updateInputTxt, setUpdateInputTxt] = useState<string>(todos.title);

  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const todoWithCompleted = {...todos, completed: completed};
    dispatch(updateCompleted(todoWithCompleted));
  }, [completed])

  const handleFocus = () => {
    setUpdateInputBtn(!updateInputBtn)
    if(inputRef.current) {
      console.log("asd")
      inputRef.current.focus();
    }
  }

  const handleSubmitUpdate = () => {
    const todoWithUpdateTitle = {...todos, title: updateInputTxt.trim()};
    if(updateInputTxt.trim() != '') {
      dispatch(updateTodo(todoWithUpdateTitle));
      setUpdateInputBtn(!updateInputBtn)
    }
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todos));
  }

  return (
    <div className='w-full flex justify-between h-[60px] leading-[60px] border-t-[1px]'>
      <div>
        {updateInputBtn ? 
          <input type="checkbox" defaultChecked={completed} className='mr-4' onChange={e => setCompleted(e.target.checked)}/> :
          null}
        {
          updateInputBtn ? 
          <>
            {completed ? <del>{todos.title}</del> : <span>{todos.title}</span>}
          </> : 
          <input className='w-72 h-10 px-2 outline-none border-gray-400 border-2' value={updateInputTxt} onChange={e => setUpdateInputTxt(e.target.value)}/>
        }
      </div>
      <div className='flex'>
        <button className='text-white text-xs w-10 cursor-pointer rounded-sm text-center leading-[27px] my-4 bg-green-400' onClick={updateInputBtn ? () => handleFocus() : handleSubmitUpdate}>U</button>
        <button className='text-white text-xs w-10 cursor-pointer rounded-sm text-center leading-[27px] my-4 ml-2 bg-red-400' onClick={handleDelete}>X</button>
      </div>
    </div>
  )
}

export default Todo
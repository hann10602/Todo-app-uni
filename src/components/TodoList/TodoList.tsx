import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Todo from '../Todo/Todo'

interface TodoListComponent {
  type: string
}

const TodoList:React.FC<TodoListComponent> = ({type}) => {
  let todoList = useSelector((state:RootState) => state.blog.todoList)

  if(type == "Completed") {
    todoList = todoList.filter(todo => {return todo.completed == true});
  }
  
  if(type == "Pending") {
    todoList = todoList.filter(todo => {return todo.completed == false});
  }

  return (
    <div className='w-full min-h-[88px] bg-white px-5 pb-7 text-lg'>
        {todoList.map((todo, key) => <Todo key={key} todos={todo}/>)}
    </div>
  )
}

export default TodoList
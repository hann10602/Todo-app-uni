import React from 'react'
import { Link, useLocation } from "react-router-dom"
import Input from '../Input'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllTodo } from '../../redux/todo.reducer'
import { RootState } from '../../store'
import LinkPath from './LinkPath'

interface layoutComponent {
    children: JSX.Element
}

const Pages = [
    {
        pathName: "All",
        to: "/"
    },{
        pathName: "Pending",
        to: "/pending"
    },{
        pathName: "Completed",
        to: "/completed"
    } 
];

const Layout:React.FC<layoutComponent> = ({children}) => {
    const todoList = useSelector((state: RootState) => state.blog.todoList);
    const dispatch = useDispatch();

    const location = useLocation();

    const handleDeleteAllTodo = () => {
        dispatch(deleteAllTodo());
    }

    return (
        <div className='bg-white w-424c py-2 rounded-lg'>
            <div className='px-5 border-b border-gray-400'>
                <Input/>
                <div className='py-4'>
                    <div className=' flex justify-between leading-8'>
                        <ul className='flex justify-between w-52 text-lg'>
                            {Pages.map(page => <li key={page.pathName}><LinkPath to={page.to} active={location.pathname == page.to}>{page.pathName}</LinkPath></li>)}
                        </ul>
                        {
                            todoList.length != 0 ?
                        <button className='bg-blue-500 hover:bg-blue-400 text-white text-sm px-4 rounded-md font-semibold h-8' onClick={handleDeleteAllTodo}>Clear All</button> :
                        <button className='bg-blue-400 text-white text-sm px-4 rounded-md font-semibold h-8' onClick={handleDeleteAllTodo} disabled>Clear All</button>
                        }
                    </div>
                </div>
            </div>
            {children}
        </div>
  )
}

export default Layout
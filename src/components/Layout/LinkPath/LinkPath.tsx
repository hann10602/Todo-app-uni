import React from 'react'
import { Link } from 'react-router-dom'

interface LinkPathType {
    children: string
    to: string
    active: boolean
}

const LinkPath:React.FC<LinkPathType> = ({children, to, active}) => {
  return (
    <div>
        {
            active ?
            <span className='text-blue-500'>{children}</span> :
            <Link to={to}>{children}</Link>
        }
    </div>
  )
}

export default LinkPath
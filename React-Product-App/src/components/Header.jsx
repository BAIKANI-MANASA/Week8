import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return ( 
    <div className='flex justify-between px-10 items-center bg-gray-400'>
        <img width="80px" className='p-2 rounded-4xl' src="https://static.vecteezy.com/system/resources/previews/015/259/493/original/business-consulting-services-logo-design-vector.jpg" alt=""/>
        <ul className='flex gap-10 text-2xl'>
            <li>
                <NavLink to='' className={({isActive})=>(isActive?"text-blue-600 p-2":"")}>Home</NavLink>
            </li>
            <li>
                <NavLink to='products' className={({isActive})=>(isActive?"text-blue-600 p-2":"")}>ProductsList</NavLink>
            </li>
            <li>
                <NavLink to='contactus' className={({isActive})=>(isActive?"text-blue-600 p-2":"")}>ContactUs</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header
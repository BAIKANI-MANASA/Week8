import {NavLink, Outlet} from 'react-router'

function Technologies() {
  return (
    <div>
        <ul className='flex justify-around text-center'>
            <li>
                <NavLink to="java">java</NavLink>
            </li>
            <li>
                <NavLink to="nodejs">nodejs</NavLink>
            </li>
            <li>
                <NavLink to="vue">Vue</NavLink>
            </li>
        </ul>
        {/* placeholder for children of technologies */}
        <Outlet/>
    </div>
  )
}

export default Technologies
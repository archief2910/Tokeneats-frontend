import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <div>
        <div className='text-center'>
            <div className='list-group'>
                <h4>User Panel</h4>
                <NavLink to="/dashboard" className="list-group-item list-group-item-action">
                    Dashboard
                </NavLink>
                <NavLink to="/dashboard/profile" className="list-group-item list-group-item-action">
                    Profile
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default UserMenu
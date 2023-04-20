import React from 'react'
import { userAuth } from '../Context/AuthContext'

const NavBar = () => {
    const { currentUser, logout } = userAuth()
    const handleLogout = async () => {
        try {
          await logout()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='flex justify-center'>
            <div className="navbar containerWrap fixed z-10  flex justify-between ">
                <a className="btn btn-ghost normal-case text-xl">Instant-Chat</a>
                {currentUser && <button onClick={handleLogout}>Logout</button>}
            </div>
        </div>
    )
}

export default NavBar
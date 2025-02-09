import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1>Dojo Blog</h1>
            <class className="link">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </class>
        </nav>
    )
}



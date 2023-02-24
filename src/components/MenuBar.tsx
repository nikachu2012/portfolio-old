import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => {
    return (
        <>
            <li><Link to={`/profile`}>👤Profile</Link></li>
            <li><Link to={`/skill`}>🎯Skill</Link></li>
            <li><Link to={`/timeline`}>📅Timeline</Link></li>
            <li><Link to={`/works`}>👨‍💻Works</Link></li>
            <li><Link to={`/social`}>🌐Social</Link></li>
        </>
    )
}

export default MenuBar

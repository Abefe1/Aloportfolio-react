import React from 'react'
import { NavLink } from 'react-router-dom'
import './Links.css'

const Links = ({label, to, icon}) => {
return (
    <NavLink id='link' to={to}>
        {/* <span id='icon'>{icon}</span> */}
        <span id='linkText'>{label}</span>
    </NavLink>
    
)
}

export default Links
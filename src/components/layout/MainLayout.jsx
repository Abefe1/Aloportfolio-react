import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../nav/NavBar'

import './MainLayout.css'

const MainLayout = () => {
return (
    <div id='mainLayout'>
        <div id='Nav' style={{width:`100%`}}><NavBar></NavBar></div>
        <div id='outlet'style={{width:`100%`, color:`black`}}><Outlet/></div>
        
    </div>

)
}

export default MainLayout

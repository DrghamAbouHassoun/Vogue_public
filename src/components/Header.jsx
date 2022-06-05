import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'

const Header = () => {
    return (
        <header className="header">
            <Navbar className="nav-fixed" />
            <Slider />
        </header>
    )
}

export default Header
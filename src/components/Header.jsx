import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'

const Header = ({handleModalToggle}) => {
    return (
        <header className="header">
            <Navbar className="nav-fixed" />
            <Slider handleModalToggle={handleModalToggle} />
        </header>
    )
}

export default Header
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../features/lang/langSlice'
import Menubar from './Menubar'

const Navbar = ({className}) => {
    const lang = useSelector(state => state.lang.language)
    const dispatch = useDispatch()

    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle);
    }

    return (
        <nav className={`nav-bar ${className}`}>
            <div className="nav-brand">
                <img src="./assets/images/icons/main.png" alt='VOGUE' />
            </div>
            <div className="nav-button-group">
                <div className="lang">
                    <button onClick={() => dispatch(change())}>
                        <i className="fa-solid fa-language"></i>
                        <span>{lang ? "EN" : "AR"}</span>
                    </button>
                </div>
                <div className="menu-toggle-button">
                    <button type="button" onClick={handleMenuToggle} style={{color : menuToggle ? 'white' : 'black'}}>
                        <i className='fas fa-bars'></i>
                        <div className="dot"></div>
                    </button>
                </div>
            </div>
            <Menubar menuToggle={menuToggle} />
        </nav>
    )
    }

export default Navbar
import React from 'react'
import Menulist from '../data/Menulist.json';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Menubar = ({menuToggle}) => {
  const lang = useSelector(state => state.lang.language);

  return (
    <div className={`menu-bar ${menuToggle ? 'activate' : ''}`} >
        <div className={`menu-list ${lang || "ar"}`}>
          {
            Menulist.map((item, index) => <Link to={item.url} key={index}>{lang ? item.text[0] : item.text[1]}</Link>)
          }
        </div>
    </div>
  )
}

export default Menubar
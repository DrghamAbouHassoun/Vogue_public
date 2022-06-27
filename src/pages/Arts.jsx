import React from 'react'
import Gallery from '../components/Gallery/Gallery'
import Navbar from '../components/Navbar'
import arts from '../data/Artis.json'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Arts = () => {
  const lang = useSelector(state => state.lang.language);

  return (
    <div>
      <Navbar />
      <div className="custom-container">
        <h1>{lang ? arts.title[0] : arts.title[1]}</h1>
        <Gallery />
      </div>
    </div>
  )
}

export default Arts
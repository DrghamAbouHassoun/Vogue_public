import React from 'react'
import AccordList from '../components/Accord/AccordList';
import Navbar from '../components/Navbar';

const Beauty = () => {
  return (
    <div>
        <Navbar />
        <div className="custom-container">
          <AccordList />
        </div>
    </div>
  )
}

export default Beauty
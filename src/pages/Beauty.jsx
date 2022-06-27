import React from 'react'
// import AccordList from '../components/Accord/AccordList';
import Navbar from '../components/Navbar';
import Accordion from '../components/Accordion/Accordion';
import accordion from '../data/Accordion.json';

const Beauty = () => {
  return (
    <div>
        <Navbar />
        <div className="custom-container">
          <Accordion elements={accordion} />
        </div>
    </div>
  )
}

export default Beauty
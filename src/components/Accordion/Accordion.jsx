import React from 'react'
import { useState } from 'react'
import AccordionItem from './AccordionItem'
import { useSelector } from 'react-redux/es/exports'


const Accordion = ({elements}) => {
  const lang = useSelector(state => state.lang.language);

    const [indexItem, setIndex] = useState(2);

    const handleItemOpen =  (index) => {
        setIndex(index);
    }

  return (
    <div className="accordion-container">
      {
      elements.map((element, index) => (
        <AccordionItem 
          active={indexItem === index} 
          index={index} 
          setIndex={setIndex} 
          logo={element.logo}
          title={lang ? element.title[0] : element.title[1]}
          firstText={lang ? element.firstText[0] : element.firstText[1]}
          secondText={lang ? element.secondText[0] : element.secondText[1]}
          itemOne={lang ? element.list.itemOne[0] : element.list.itemOne[1]}
          itemTwo={lang ? element.list.itemTwo[0] : element.list.itemTwo[1]}
        />
      ))
      }
    </div>
  )
}

export default Accordion
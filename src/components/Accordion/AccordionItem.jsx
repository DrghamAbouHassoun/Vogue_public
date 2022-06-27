import React from 'react'

const AccordionItem = ({
    title = "Accordion Title", 
    firstText = "First text",
    secondText = "Second text",
    itemOne = "Item One",
    itemTwo = "Item Two",
    logo,
    active = false,
    setIndex,
    index = 0,
}) => {
  return (
    <div className={`accord-item  ${active && "active"}`}>
        <div className="accordion-item-header" onClick={() => setIndex(index)} >
            <h1>
                <span className={`accordion-item-title`}>
                    <span><img src={logo} alt="Logo" /></span>
                    <span>{title}</span>
                </span>
                <span className={active && "active"}><i className="fas fa-caret-right"></i></span>
            </h1>
        </div>
        <div className={`accordion-item-body ${active && 'active'}`}>
            <p>{firstText}</p>
            <ul>
                <li>{itemOne}</li>
                <li>{itemTwo}</li>
            </ul>
            <p>{secondText}</p>
        </div>
    </div>
  )
}

export default AccordionItem
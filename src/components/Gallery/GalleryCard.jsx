import React from 'react'

const GalleryCard = ({image, title, subtitle, className}) => {
  return (
    // <div className={`gallery-item`} style={{backgroundImage : `url("${image}")`}}>
    <div className="gallery-item">
        <div className='content'>
            <img src={image} alt="" />
        </div>
        <div className="card-info">
            <h3 className="card-title">{title}</h3>
            <h4 className="card-subtitle">{subtitle}</h4>
        </div>
    </div>
  )
}

export default GalleryCard
import React from 'react'

const GalleryCard = ({image, title, subtitle}) => {
  return (
    <div className="gallery-item" style={{backgroundImage : `url("${image}")`}}>
        <div className="gallery-cover">
            <div className="gallery-info">
            <h3 className='card-title'>{title}</h3>
        <h4 className="card-subtitle">{subtitle}</h4>
            </div>
        </div>
    </div>
  )
}

export default GalleryCard
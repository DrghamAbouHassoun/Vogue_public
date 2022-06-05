import React from 'react'

const CategoryCard = ({image, handleImageChange}) => {
  
    return (
      <>
        <div className="category-box">
          <img 
            src={image} 
            alt="cateogry"
            onMouseOver={() => handleImageChange(image)}
            onMouseOut={() => handleImageChange('')}
          />
        </div>
      </>
    );
}

export default CategoryCard
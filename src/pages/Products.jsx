import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import CategorySlider from '../components/Categoies/CategorySlider';
import SujestedSection from '../components/Sujested/SujestedSection';
import sujested from '../data/Sujested.json';
import ShippingSection from '../components/Shipping/ShippingSection';
import { useSelector } from 'react-redux/es/exports';
import sections from '../data/Sections.json';

const Products = () => {
  const lang = useSelector(state => state.lang.language);

  const [image, setImage] = useState('');

  const handleImageChange = (img) => {
    console.log(img)
    setImage(img);
  }

  return (
    <div className="modal-container">
      <Navbar className="bg-pink" />
      <main>
        <Hero />
        <div className="custom-container">
          <CategorySlider handleImageChange={handleImageChange} />
          <SujestedSection 
            columns={3} 
            title={lang ? sections.sujested.title[0] : sections.sujested.title[1]}
            type="normal"
            products={sujested}
          />
          <ShippingSection 
            title={lang ? sections.shippers.title[0] : sections.shippers.title[1]}
          />
        </div>
      </main>

      <div className={`category-modal ${image ? 'active' : ''}`}>
        <div className="modal-background">
        </div>
        <div className="modal-image">
          <img 
            src={image} 
            alt="one" 
            onMouseOver={() => handleImageChange(image)} 
            onMouseOut={() => handleImageChange('')}
          />
        </div>
      </div>
    </div>
  )
}

export default Products
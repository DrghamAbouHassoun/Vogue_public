import React from 'react'
import GalleryOne from '../../data/GalleryOne.json';
import GalleryCard from './GalleryCard';
import { useSelector } from 'react-redux/es/exports';

const GalleryTwo = () => {
    const lang = useSelector(state => state.lang.language);
  return (
    <div className="gallery-two">
        <div className="gallery-col">
        {
            GalleryOne.slice(0, 4).map((element, index) => (
            <GalleryCard 
                key={index}
                image={element.image}
                title={lang ? element.title[0] : element.title[1]}
                subtitle={lang ? element.subtitle[0] : element.subtitle[1]}
            />
            ))
        }
        </div>
        <div className="gallery-col">
        {
            GalleryOne.slice(4, 7).map((element, index) => (
            <GalleryCard 
                key={index}
                image={element.image}
                title={lang ? element.title[0] : element.title[1]}
                subtitle={lang ? element.subtitle[0] : element.subtitle[1]}
            />
            ))
        }
        </div>
        <div className="gallery-col">
        {
            GalleryOne.slice(7, 11).map((element, index) => (
            <GalleryCard 
                key={index}
                image={element.image}
                title={lang ? element.title[0] : element.title[1]}
                subtitle={lang ? element.subtitle[0] : element.subtitle[1]}
            />
            ))
        }
        </div>
        <div className="gallery-col">
        {
            GalleryOne.slice(7, 9).map((element, index) => (
            <GalleryCard 
                key={index}
                image={element.image}
                title={lang ? element.title[0] : element.title[1]}
                subtitle={lang ? element.subtitle[0] : element.subtitle[1]}
            />
            ))
        }
        </div>
    </div>
  )
}

export default GalleryTwo
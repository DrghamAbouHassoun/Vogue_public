import React from 'react';
import galleryOne from '../../data/GalleryOne.json';
import GalleryCard from './GalleryCard';
import { useSelector } from 'react-redux/es/exports';

const Gallery = () => {
  const lang = useSelector(state => state.lang.language);
  console.log(lang)

  return (
    <div className="gallery">
      <div className="gallery-col-2">
        <div className="gallery-col">
          {
            galleryOne.slice(0, 3).map((element, index) => (
                <GalleryCard
                    key={index}
                    image={element.image}
                    title={lang ? element.title[0] : element.title[1]}
                    subtitle={lang ? element.subtitle[0] : element.subtitle[1]}
                    className={`gallery-item ${lang ? "" : "ar"}`}
                />
            ))
          }
        </div>
        <div className="gallery-col">
          {
            galleryOne.slice(4, 7).map((element, index) => (
                <GalleryCard
                    key={index}
                    image={element.image}
                    title={lang ? element.title[0] : element.title[1]}
                    subtitle={lang ? element.subtitle[0] : element.subtitle[1]}
                    className={`gallery-item ${lang ? "" : "ar"}`}
                />
            ))
          }
        </div>
      </div>

      <div className="gallery-col-2">
        <div className="gallery-col">
          {
            galleryOne.slice(9, 11).map((element, index) => (
                <GalleryCard
                    key={index}
                    image={element.image}
                    title={lang ? element.title[0] : element.title[1]}
                    subtitle={lang ? element.subtitle[0] : element.subtitle[1]}
                    className={`gallery-item ${lang ? "" : "ar"}`}
                />
            ))
          }
        </div>
        <div className="gallery-col">
          {
            galleryOne.slice(11, 15).map((element, index) => (
                <GalleryCard
                    key={index}
                    image={element.image}
                    title={lang ? element.title[0] : element.title[1]}
                    subtitle={lang ? element.subtitle[0] : element.subtitle[1]}
                    className={`gallery-item ${lang ? "" : "ar"}`}
                />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Gallery
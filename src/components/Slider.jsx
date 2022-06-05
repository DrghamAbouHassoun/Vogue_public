import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';
import { Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import Hero from '../data/Hero.json';

const Slider = () => {
    const lang = useSelector(state => state.lang.language);

    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="slider">
        {
            Hero.map((item, index) => (
            <Carousel.Item key={index}>
                <img
                className="d-block w-100"
                src={item.image}
                alt="Second slide"
                />
        
                <Carousel.Caption className={`header-box ${lang || 'ar'}`} >
                    <h1>{lang ? item.text[0] : item.text[1]}</h1>
                    <Button>{lang ? item.button[0] : item.button[1]}</Button>
                </Carousel.Caption>
            </Carousel.Item>
            ))
        }
        
        </Carousel>
    );
}

export default Slider
// Imports
import React, { useState } from 'react';
import './Slider.css';
import Img from '../Img/Img';

// Functional Slider Component
function Slider() {
    // Array of Slider Images, passing image path through props
    let sliderArr = [<Img src={'ad1.png'} />, <Img src={'ad2.png'} />, <Img src={'ad3.png'} />];
    // Initialize x to 0 using hooks
    const [x, setX] = useState(0);
    // Changing x value with function, x will become a tool for positioning. Dynamic based on number of slides.
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    }
    return (
        // .map loops through array and renders each item with translate x value
        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                        {item}
                    </div>
                );
            })}
            <button id="goLeft" onClick={goLeft}><i className="fas fa-chevron-left"></i></button>
            <button id="goRight" onClick={goRight}><i className="fas fa-chevron-right"></i></button>
        </div>
    )
}

// Export Slider Component
export default Slider;
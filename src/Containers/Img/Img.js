// Imports
import React from 'react';
import './Img.css';

// ES6 Functional Component Img
const Img = (props) => {
    return <img src={require(`../../imgs/${props.src}`)} alt="advertisement" className="image"></img>
}

// Export Img Component
export default Img;
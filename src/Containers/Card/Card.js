// Imports
import React from 'react';

// ES6 Card Functional Component
const Card = props => {
    // Return Card JSX with props given to us by our .map method in Products.js
    return (
        <div className="products">
            <img src={require(`../../imgs/${props.img}`)} alt={props.title}></img>
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </div>
    );
}

// Export Card Component
export default Card;
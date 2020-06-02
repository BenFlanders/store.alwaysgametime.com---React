// Imports
import React, { Component } from 'react';
import './Products.css';
import Card from '../../Containers/Card/Card';
import data from './Products.json';

// Creating Products Class Component and Setting State
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: data,
            filteredData: data,
            checkApparel: false,
            checkHats: false,
            checkAccessories: false,
            priceFilter: ""
        }
    }

    // handleCheck Method which filters data and sets state
    handleCheck = event => {
        console.log(event.target.name, event.target.value);
        this.setState(
            {
                [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
            },
            () => {
                console.log(this.state.checkApparel);
                let filteredProducts = this.filterProducts()
                filteredProducts = this.filterPrice(filteredProducts)


                this.setState({ filteredData: filteredProducts })
                console.log(filteredProducts);
            }
        );


    }

    // filterProducts method pulls current array of data and concats filtered data based on checkbox values
    filterProducts = () => {
        let filteredProducts = [];
        if (this.state.checkApparel) {
            let apparel = this.state.productData.filter(p => p.tag === "apparel");
            filteredProducts = filteredProducts.concat(apparel)
        }
        if (this.state.checkHats) {
            let hats = this.state.productData.filter(p => p.tag === "hats");
            filteredProducts = filteredProducts.concat(hats)
        }
        if (this.state.checkAccessories) {
            let accessories = this.state.productData.filter(p => p.tag === "accessories");
            filteredProducts = filteredProducts.concat(accessories)
        }
        if (!this.state.checkApparel && !this.state.checkHats && !this.state.checkAccessories) {
            filteredProducts = this.state.productData;
        }
        return filteredProducts;
    }

    // filterPrice method sorts currently rendered product data and returns new array
    filterPrice = (filteredProducts) => {
        if (this.state.priceFilter === "lowtohigh") return filteredProducts.sort((a, b) => a.price - b.price);
        else if (this.state.priceFilter === "hightolow") return filteredProducts.sort((a, b) => b.price - a.price);
        else return filteredProducts.sort((a, b) => a.id - b.id);

    }
    render() {
        return (
            <div>
                {/* JSX Filter made with checkboxes and handleCheck method */}
                <div className="filter">
                    <div className="checkbox">
                        <h2 className="filter-type">Sort by category: </h2>
                        <label for="apparel">APPAREL</label>
                        <input type="checkbox" name="checkApparel" checked={this.state.checkApparel} onChange={this.handleCheck} />
                        <label for="hats">HATS</label>
                        <input type="checkbox" name="checkHats" checked={this.state.checkHats} onChange={this.handleCheck} />
                        <label for="accessories">ACCESSORIES</label>
                        <input type="checkbox" name="checkAccessories" checked={this.state.checkAccessories} onChange={this.handleCheck} />
                    </div>
                    <div className="custom-select">
                        <h2 className="filter-type">Sort by price: </h2>
                        <select name="priceFilter" id="price" onChange={this.handleCheck}>
                            <option value="default">--</option>
                            <option value="lowtohigh">Low-to-High</option>
                            <option value="hightolow">High-to-Low</option>
                        </select>
                    </div>
                </div>
                <div className="container">
                    <div className="section-heading1">
                        <div className="line"></div>
                        <h1>PRODUCTS</h1>
                        <div className="line"></div>
                    </div>
                    {/* .map array method that renders all products with Card component */}
                    <div className="product-showcase">
                        {this.state.filteredData.map(product => {
                            return (
                                <Card
                                    key={product.id} img={product.img}
                                    title={product.title} price={product.price}
                                    description={product.description} />
                            )
                        })}
                    </div>
                    {/* JSX page details */}
                    <section className="instagram-section">
                        <div className="section-heading">
                            <div className="line"></div>
                            <h2>#AGTstore</h2>
                            <div className="line"></div>
                        </div>
                        <div className="posts">
                            <div className="insta1"></div>
                            <div className="insta2"></div>
                            <div className="insta3"></div>
                            <div className="insta4"></div>
                            <div className="insta5"></div>
                            <div className="insta6"></div>
                            <div className="insta7"></div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

// Export Product Component
export default Products;
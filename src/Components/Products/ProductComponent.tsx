import React from "react";
import './ProductStyleSheet.css';

function Products() {

    return (
        <div className="products-container">
            <h2 className="title">Electrical Products</h2>

            <div className="product-grid">

                <div className="product-card">
                    https://via.placeholder.com/200
                    <h3>Electrical Switch</h3>
                    <p>High quality modular switch.</p>
                    <h4>₹150</h4>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    https://via.placeholder.com/200
                    <h3>Copper Wire</h3>
                    <p>Durable copper electrical wire.</p>
                    <h4>₹500</h4>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    https://via.placeholder.com/200
                    <h3>LED Bulb</h3>
                    <p>Energy efficient LED bulb.</p>
                    <h4>₹120</h4>
                    <button>Add to Cart</button>
                </div>

            </div>
        </div>
    );

}

export default Products;
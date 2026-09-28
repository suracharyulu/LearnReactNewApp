import "./CartStyleSheet.css";

function Cart() {
    return (
        <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>

            <div className="cart-item">
                <div className="item-details">
                    <h3>LED Bulb</h3>
                    <p>Price: ₹120</p>
                </div>

                <div className="item-actions">
                    <input type="number" value="1" min="1" readOnly />
                    <button className="remove-btn">Remove</button>
                </div>
            </div>

            <div className="cart-item">
                <div className="item-details">
                    <h3>Copper Wire</h3>
                    <p>Price: ₹500</p>
                </div>

                <div className="item-actions">
                    <input type="number" value="2" min="1" readOnly />
                    <button className="remove-btn">Remove</button>
                </div>
            </div>

            <div className="cart-summary">
                <h3>Total: ₹1120</h3>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
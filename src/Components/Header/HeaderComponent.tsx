import React from "react";
import './HeaderStyleSheet.css';
import { Link } from "react-router-dom";
function Header() {

    return (

        <header className="header">

            <div className="logo">
                🛒 Tech Store
            </div>


            <nav>

                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>

                <Link to="/cart">Cart</Link>

                <Link to="/login">Login</Link>

            </nav>

        </header>

    );

}


export default Header;
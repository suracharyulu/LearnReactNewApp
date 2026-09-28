import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home/Home.tsx";
import Header from "./Components/Header/HeaderComponent.tsx";
import Products from "./Components/Products/ProductComponent.tsx";
import Cart from "./Components/Cart/CartComponent.tsx";
import Login from "./Components/Login/LoginComponent.tsx";


function App() {
    return (
        <>
            <h1>
                <u>Electrical Parts Applications</u>
            </h1>

            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
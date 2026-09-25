import { ToastContainer, toast,Bounce } from 'react-toastify';

import { createContext, useContext, useState, useMemo } from "react";
import { initialProducts } from "../data/Product";

const CartContext = createContext();



export const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const products = initialProducts;

    // add item into the cart

    const addtocart = (product) => {

        toast.success('Item Added Successfully', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });


        setCart((prevCart) => {
            const existingitem = prevCart.find(item => item.id === product.id);
            if (existingitem) {
                return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 }
                    : item);

            }
            else {
                return [...prevCart, { ...product, quantity: 1 }]
            }

        })

    }
    // remove item from cart
    const removeCart = (productId, removeAll = false) => {

        
        toast.success('Item Removed Successfully', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });

        setCart((prevCart) => {
            const existingitem = prevCart.find(item => item.id === productId);

            if (!existingitem) return prevCart;
            if (removeAll || existingitem.quantity === 1) {
                return prevCart.filter(item => item.id !== productId)

            }
            else {
                return prevCart.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)
            }

        })

    }

    const clearCart = () => setCart([]);
    const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);

    const carttotal = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0), [cart])


    return (
        <CartContext.Provider value={{ products, cart, addtocart, clearCart, carttotal, cartCount, removeCart }}>{props.children}</CartContext.Provider>
    )
}
export const usecart = () => useContext(CartContext);

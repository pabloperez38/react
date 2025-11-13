import { useState } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist;
    };

    const addItem = (item) => {
        if (exists(item.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + item.quantity };
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
            toast.success(`Se agregó ${item.name} al carrito`);
        } else {
            setCart([...cart, item]);
            toast.success(`Se agregó ${item.name} al carrito`);
        }
    };

    const deleteItem = (id) => {
        const filtered = cart.filter((prod) => prod.id !== id);
        setCart(filtered);
        toast.error("Producto eliminado del carrito");
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        return totalItems;
    };

    const total = () => {
        const total = cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        return Math.round(total * 100) / 100;
    };

    const chekout = () => {
        const ok = confirm("¿Desea finalizar la compra?");
        if (ok) {
            alert("Producto eliminado del carrito");
            clearCart();
        }
    };

    const values = {
        cart,
        addItem,
        clearCart,
        getTotalItems,
        deleteItem,
        total,
        chekout,
    };

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
};

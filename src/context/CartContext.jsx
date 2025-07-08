import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (pizza) => {
		setCart((oldCart) => {
			const existe = oldCart.find((item) => item.id === pizza.id);
			if (existe) {
				return oldCart.map((item) =>
					item.id === pizza.id ? { ...item, qty: (item.qty || 1) + 1 } : item
				);
			} else {
				return [...oldCart, { ...pizza, qty: 1 }];
			}
		});
        console.log(cart)
	};

    const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

	return (
		<CartContext.Provider value={{ cart, setCart, addToCart, totalPrice}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

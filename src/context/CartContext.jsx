import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const navigate = useNavigate();
	
	const checkout = async (pedido, token) => {
		const res = await fetch("http://localhost:5000/api/checkouts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				pedido,
			}),
		});
		const data = await res.json();
		console.log(data)
		alert(data.error ? data.error : "¡Gracias por tu compra!");
		if (!data.error) setCart([]);
		navigate("/");
	};

	const addToCart = (pizza) => {
		setCart((oldCart) => {
			const existe = oldCart.find((item) => item.id === pizza.id);
			if (existe) {
				return oldCart.map((item) =>
					item.id === pizza.id ? { ...item, qty: item.qty + 1 } : item
				);
			} else {
				return [...oldCart, { ...pizza, qty: 1 }];
			}
		});
	};

	const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

	return (
		<CartContext.Provider
			value={{ cart, setCart, addToCart, totalPrice, checkout }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

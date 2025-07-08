import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
	const [pizzas, setPizzas] = useState([]);

	const consultarApi = async () => {
		const url = "http://localhost:5000/api/pizzas";
		const res = await fetch(url);
		const data = await res.json();

		setPizzas(data);
	};

	useEffect(() => {
		consultarApi();
	}, []);

	return (
		<PizzasContext.Provider value={{ pizzas, setPizzas }}>
			{children}
		</PizzasContext.Provider>
	);
};

export default PizzasProvider;

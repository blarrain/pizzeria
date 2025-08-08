import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const navigate = useNavigate();
	const [token, setToken] = useState(localStorage.getItem("token"));

		const logIn = async (email, password) => {
		e.preventDefault();
		
		const res = await fetch("http://localhost:5000/api/auth/login", {
			method: "POST",
			headers: {"Content-Type": "application/json",},
			body: JSON.stringify({
				email,
				password,
			})
		})

		const data = await res.json();
		alert(data.error ? data.error : "Sesión iniciada exitosamente")
		setToken(data.token)
		localStorage.setItem("token", data.token)
		
		const limpiar = () => {
		setEmail("");
		setPassword("");
	};
		limpiar()
	}

	const logOut = () => {
		setToken(null);
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<UserContext.Provider value={{ logIn, logOut, token, setToken }}>{children}</UserContext.Provider>
	);
};

export default UserProvider;

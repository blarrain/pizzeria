import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const navigate = useNavigate();
	const [token, setToken] = useState(localStorage.getItem("token"));

		const logIn = async (email, password) => {
		
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
	}
	
	const register = async (email, password) => {
		const res = await fetch("http://localhost:5000/api/auth/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await res.json();
		alert(data.error ? data.error : "Usuario registrado exitosamente");
		setToken(data.token);
		localStorage.setItem("token", data.token);
	};

	const logOut = () => {
		setToken(null);
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<UserContext.Provider value={{ register, logIn, logOut, token, setToken }}>{children}</UserContext.Provider>
	);
};

export default UserProvider;

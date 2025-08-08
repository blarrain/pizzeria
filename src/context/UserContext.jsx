import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const navigate = useNavigate();

	const logOut = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<UserContext.Provider value={{logOut}}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;

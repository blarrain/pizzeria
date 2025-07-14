import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [token, setToken] = useState(true);
	const navigate = useNavigate();

	const logOut = () => {
		setToken(false);
		navigate("/login");
	};

	return (
		<UserContext.Provider value={{ token, setToken, logOut }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;

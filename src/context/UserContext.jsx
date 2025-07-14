import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [token, setToken] = useState(true);
const logOut = () => {
		setToken(false);
	};
    
	return (
		<UserContext.Provider value={{ token, setToken, logOut }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;

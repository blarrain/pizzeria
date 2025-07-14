import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CartProvider from "./context/CartContext.jsx";
import PizzasProvider from "./context/PizzasContext.jsx";
import UserProvider from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CartProvider>
			<PizzasProvider>
				<UserProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</UserProvider>
			</PizzasProvider>
		</CartProvider>
	</StrictMode>
);

import Header from "./Header";
import CardPizza from "./CardPizza";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
// import { pizzas } from "../data/pizzas";

const Home = () => {
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
		<div>
			<Header />
			<main>
				<Container className='py-4'>
					<Row className='row-gap-4'>
						{pizzas.map((pizza) => (
							<CardPizza
								key={pizza.id}
								name={pizza.name}
								price={pizza.price}
								ingredients={pizza.ingredients}
								img={pizza.img}
							/>
						))}
					</Row>
				</Container>
			</main>
		</div>
	);
};

export default Home;

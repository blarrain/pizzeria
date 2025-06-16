import Header from "./Header";
import CardPizza from "./CardPizza";
import { Container, Row } from "react-bootstrap";
import { pizzas } from "../data/pizzas";

const Home = () => {
	return (
		<div>
			<Header />
			<main>
				<Container className="py-4">
					<Row className="row-gap-4">
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

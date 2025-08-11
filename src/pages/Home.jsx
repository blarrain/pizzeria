import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";

const Home = () => {
	const { pizzas } = useContext(PizzasContext);

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
								id={pizza.id}
							/>
						))}
					</Row>
				</Container>
			</main>
		</div>
	);
};

export default Home;

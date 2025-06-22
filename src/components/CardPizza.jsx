import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardPizza({
	img = "./src/assets/img/Header.jpg",
	name = "Error",
	ingredients = "Descripción no disponible",
	price = 0,
}) {
	return (
		<Col xs={12} sm={8} md={4} lg={4}>
			<Card>
				<Card.Img variant="top" src={img} />
				<ListGroup className="list-group-flush">
					<ListGroupItem>
						<Card.Title className="fs-1 text-capitalize">{name}</Card.Title>
					</ListGroupItem>
					<ListGroupItem className="fw-light px-0">
						<h6 className="fs-4 fw-light text-center text-body-tertiary">
							Ingredientes
						</h6>
						<ListGroup as="ul" className="list-group-flush">
							{ingredients.map((ingredient) => (
								<ListGroupItem as="li" className="ingredient small">
									{ingredient}
								</ListGroupItem>
							))}
						</ListGroup>
					</ListGroupItem>
					<ListGroupItem>
						<p className="text-center fw-medium text-body fs-4">
							Precio: ${price.toLocaleString("es-CL")}
						</p>
						<div className="d-flex justify-content-between mb-3">
							<Button variant="outline-dark">Ver más 👀</Button>
							<Button variant="dark">Agregar 🛒</Button>
						</div>
					</ListGroupItem>
				</ListGroup>
			</Card>
		</Col>
	);
}

export default CardPizza;

import { Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { types, useInjection } from "../../ioc";
import BasketStore from "../../stores/BasketStore";

const Basket = () => {
    const store = useInjection<BasketStore>(types.basketStore);
    return <Container>
        <ListGroup>
            {
                store.basket.map((item, key) =>
                    <ListGroup.Item>{item.product.name} Number: {item.count}</ListGroup.Item>)
            }
        </ListGroup>
        <ListGroup>
            <ListGroupItem>Total number: { store.getTotalCount()}</ListGroupItem>
            <ListGroupItem>Total price: { store.getTotalPrice()}</ListGroupItem>
        </ListGroup>
    </Container>

}
export default Basket;
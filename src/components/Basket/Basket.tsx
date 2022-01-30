import { Button, Col, Container, ListGroup, ListGroupItem, Row, Table } from "react-bootstrap";
import { types, useInjection } from "../../ioc";
import BasketStore, { BasketItem } from "../../stores/BasketStore";
import NumericInput from "react-numeric-input";
import { Product } from "../../models/Product";
import { observer } from "mobx-react-lite";
import { useCallback, useState } from "react";
import LoginStore from "../../stores/LoginStore";
import { Link, useNavigate } from "react-router-dom";
import { Icon, Price } from "../Utils";

const Basket = observer(() => {
    const [isConfirmed, setConfirmed] = useState(false)
    return isConfirmed
        ? <div className='centered'>
            <Icon name="check2-square" size={150} />
            <h1 className="h3 mb-3 font-weight-normal">Order confirmed</h1>
        </div>
        : <BasketList onConfirm={() => setConfirmed(true)} />;
})

type BasketListProps = {
    onConfirm: () => void;
}

const BasketList = observer((props: BasketListProps) => {
    const store = useInjection<BasketStore>(types.basketStore);
    if (!store.basket.length) {
        return <div className='centered'>
            <Icon name="basket" size={150} />
            <h1 className="h3 mb-3 font-weight-normal mt-3">Empty basket</h1>
        </div>
    }

    return <Container>
        <Row>
            <Col sm={12} lg={{ offset: 1, span: 10 }}>
                <Table hover={true}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.basket.map((item, key) => <BasketItemRow {...item} />)}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><h3>Total</h3></td>
                            <td className="text-end">
                                <h3><strong><Price value={store.totalPrice} /></strong></h3>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="d-flex">
                                <OrderConfirmationButton onConfirm={props.onConfirm} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
});

const BasketItemRow = observer((props: BasketItem) => {
    const store = useInjection<BasketStore>(types.basketStore);
    const { avatar, name, id, price } = props.product;
    return <tr>
        <td className="col-sm-8 col-md-6">
            <div className="d-flex">
                <div className="flex-shrink-0">
                    <img
                        className="media-object"
                        src={avatar}
                        style={{ width: 72, height: 72 }} />
                </div>
                <div className="flex-grow-1 ms-3">
                    <Link to={`/product/${id}`}>{name}</Link>
                </div>
            </div>
        </td>
        <td className="col-sm-1 col-md-1" style={{ textAlign: 'center' }}>
            <NumericInput
                min={1}
                max={10}
                value={props.count}
                onChange={(changedNumber) => {
                    if (changedNumber !== null)
                        store.updateCount(id, changedNumber)
                }} />
        </td>
        <td className="col-sm-1 col-md-1 text-center">
            <strong><Price value={price} /></strong>
        </td>
        <td className="col-sm-1 col-md-1 text-center">
            <strong><Price value={price * props.count} /></strong>
        </td>
        <td className="col-sm-1 col-md-2 text-end">
            <Button
                variant="danger"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation()
                    store.removeFromBasket(props.product);
                }}> Remove </Button>
        </td>
    </tr>;
})

interface OrderConfirmationProps {
    onConfirm: () => void;
}

const OrderConfirmationButton = observer((props: OrderConfirmationProps) => {
    const basketStore = useInjection<BasketStore>(types.basketStore);
    const loginStore = useInjection<LoginStore>(types.loginStore)
    const navigate = useNavigate();
    const onClick = useCallback(() => {
        if (!loginStore.isUserLoggedIn) {
            navigate(`/login`)
            return;
        }
        basketStore.makeOrder()
        props.onConfirm()
    }, [])

    return <Button className="flex-fill" variant="success" onClick={onClick}>Confirm</Button>
}
)
export default Basket;
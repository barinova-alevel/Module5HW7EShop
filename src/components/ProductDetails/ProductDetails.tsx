import { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { useInjection } from '../../ioc/ioc.react'
import ownTypes from '../../ioc/ownTypes'
import ProductStore from '../../stores/ProductStore'
import { useParams } from 'react-router-dom'


const ProductDetails = observer(() => {
    const store = useInjection<ProductStore>(ownTypes.productStore);
    let params = useParams<{ id: string }>();
    useEffect(() => {
        store.init(+params.id!);
    }, [store, params.id])

    if (!store.product) {
        return null;
    }

    const { name, id, price, avatar } = store.product
    return (
        <Container>
            <Card style={{ cursor: "pointer" }}>
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title>{name} {id}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
});

export default ProductDetails
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import Pagination from '../../components/Pagination'
import { observer } from 'mobx-react'
import { useInjection } from '../../ioc/ioc.react'
import CatalogStore from '../../stores/CatalogStore'
import ownTypes from '../../ioc/ownTypes'
import ProductStore from '../../stores/ProductStore'

const ProductsList = observer((props: { onClick: (id: number) => void }) => {
  const store = useInjection<CatalogStore>(ownTypes.catalogStore);

  useEffect(() => {
    store.init();
  }, [store])

  return (
    <Container>
      <Row className="justify-content-center">
        {store.isLoading ? (
          <Spinner animation="border" />
        ) : (
          <>
            {store.products?.map((product, key) => (
              <Col key={key} sm={6} md={4} lg={3} xl={2} className="mb-2 mt-2">
                <ProductCard product={product} onClick={() => props.onClick(product.id)} />
              </Col>
            ))}
          </>
        )}

      </Row>
      <Pagination total={store.totalPages} active={store.currentPage} onChange={(val) => { store.changePage(val) }} />
    </Container>
  )
});

const ProductDetails = observer((props: { productId: number }) => {
  const store = useInjection<ProductStore>(ownTypes.productStore);

  useEffect(() => {
    store.init(props.productId);
  }, [store, props.productId])

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

const Catalog = () => {
  const [state, setState] = useState<{ productId: number | undefined }>({ productId: undefined });
  return state.productId
    ? <ProductDetails productId={state.productId} />
    : <ProductsList onClick={_ => setState({ productId: _ })} />
}

export default Catalog

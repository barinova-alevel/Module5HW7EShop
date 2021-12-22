import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import Pagination from '../../components/Pagination'
import { observer } from 'mobx-react-lite'
import { useInjection } from '../../ioc/ioc.react'
import CatalogStore from '../../stores/CatalogStore'
import ownTypes from '../../ioc/ownTypes'
import ProductStore from '../../stores/ProductStore'

const Catalog = observer(() => {
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
                {<ProductCard product={product} /> }
              </Col>
            ))}
          </>
        )}

      </Row>
      <Pagination total={store.totalPages} active={store.currentPage} onChange={(val) => { store.changePage(val) }} />
    </Container>
  )
});
export default Catalog

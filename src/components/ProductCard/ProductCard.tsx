import React from 'react'
import { Card } from 'react-bootstrap'
import { Product } from '../../models/Product'
import { useNavigate } from 'react-router-dom';

interface Props {
  product: Product | null
}

const ProductCard = (props: Props) => {
  let navigate = useNavigate();
  if (!props.product) {
    return null
  }
  const { name, id, price, avatar } = props.product

  return (
    <Card onClick={() => {navigate(`/product/${id}`);}} style={{ cursor: "pointer" }}>
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>{name} {id}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard

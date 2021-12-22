import React from 'react'
import { Card } from 'react-bootstrap'
import { Product } from '../../models/Product'

interface Props {
  product: Product | null
  onClick: () => void
}

const ProductCard = (props: Props) => {
  if (!props.product) {
    return null
  }
  const { name, id, price, avatar } = props.product

  return (
    <Card onClick={props.onClick} style={{ cursor: "pointer" }}>
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

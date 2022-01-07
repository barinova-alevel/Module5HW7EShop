import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Product } from '../../models/Product'
import { useNavigate } from 'react-router-dom';
import ownTypes from '../../ioc/ownTypes';
import { types, useInjection } from '../../ioc';
import BasketStore from '../../stores/BasketStore';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';

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
    <Card onClick={() => { navigate(`/product/${id}`); }} style={{ cursor: "pointer" }}>
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>{name} {id}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <AddToBasketButton product={props.product} />
      </Card.Body>
    </Card>
  )
}

interface ButtonProps {
  product: Product
}

const AddToBasketButton = observer((props: ButtonProps) => {
  const { product } = props
  const store = useInjection<BasketStore>(types.basketStore)
  return (
    <Button onClick={(e:React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation() 
      store.addToBasket(product)  
      }}>
      {product.isInBasket ? "Added to basket" : "Add to basket"}
    </Button>
  )
})

export default ProductCard

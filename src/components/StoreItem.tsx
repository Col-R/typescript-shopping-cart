import React from 'react'
import { Card, Button } from 'react-bootstrap'
import formatCurrency from '../utilities/formatCurrency'
import './StoreItem.css'

type StoreItemProps = { // custom typescript type
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string
}

const StoreItem = ({id,title,price,description,category,image}:StoreItemProps) => { // custom typescript type used here
  const quantity:number = 0
  return (
    <Card className='h-100'>
      <Card.Img 
        variant = "top" 
        src = {image} 
        height = "200px" 
        className = "store__card"
      />
      <Card.Body className = "d-flex flex-column">
        <Card.Title className = "d-flex justify-content-between align-items-baseline mb-4">
            <span className = "fs-2">{title}</span>
            <span className = "ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {/* Ternary for conditional rendering. explanation here: if the cart has none, display the add to cart button. otherwise display those divs*/}
          {quantity === 0 ? (
            <Button className = "">+ Add to Cart</Button>
          ) :

          <div className='d-flex align-items-center flex-column' style = {{gap: '.5rem'}}>
            <div className="d-flex align-items-center justify-content-center" style = {{gap: '.5rem'}}>
              <Button>-</Button>
              <div>  
                <span className="fs-3">{quantity}</span> in cart
              </div>
              <Button>+</Button>
            </div>
            <Button variant="danger">Remove</Button>
          </div>}

        </div>
      </Card.Body>
    </Card>
  )
}
// https://www.youtube.com/watch?v=lATafp15HWA
export default StoreItem


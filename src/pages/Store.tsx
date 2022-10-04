import React from 'react'
import { Col, Row } from 'react-bootstrap'

import storeItems from '../data/data.json'

const Store = () => {
  interface storeProps {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
  }
  const storeItems:<storeProps> = storeItems.map((item) => {
    return <StoreItem
      key = {item.id}
      item = {item}
  })
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={4} className = "g-3">
        {storeItems}
      </Row>
    </>
  )
}

export default Store
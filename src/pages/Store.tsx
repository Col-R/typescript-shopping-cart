import React from 'react'
import { Col, Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'

import storeItems from '../data/data.json'

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={4} className = "g-3">
        {storeItems.map(item => (
          <Col>
            <StoreItem {...item} />  {/*Passing in a custom StoreItem component here, which is each of the item cards. item iterable spread as a prop for each*/}
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store
import React from 'react'
import { Link, useParams} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

function ProductScreen() {
  const { id } = useParams();  // 🔥 useParams replaces match.params
  const product = products.find((p) => p._id === id);
  return (
    <div>
        <Link to='/home' classname='btn btn-light my-3'>Go back</Link>
        <Row>
            <Col md={6}>
                <img src={product.image} alt={product.nme}fluid/>
            </Col>
            <Col md={3}>
            <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h3>{product.name}</h3>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Price: ${product.price}
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Description: {product.description}
                                        </ListGroup.Item>
                                    </ListGroup>
            
            
                         </Col>
                          <Col md={3}>
                                    <Card>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Price:</Col>
                                                    <Col>
                                                        <strong>${product.price}</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Status:</Col>
                                                    <Col>
                                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                            <Button className='btn-block' disabled={product.countInStock ==0} type='button'>Add to cart</Button>
                                                </ListGroup.Item>
                                            </ListGroup>
                                            </Card>
                                    </Col>
        </Row>
      </div>
  )
}

export default ProductScreen

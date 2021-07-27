import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col, Card, Button, ButtonGroup} from 'react-bootstrap'
import {Currency} from '../currencyFormat'

function Checkout(props) {
    const {cart} = props
    const [totalPrice, setTotalPrice]= useState(0)
    const [totalItems, setTotalItems]= useState(0)
    useEffect(()=>{
        let items=0
        let price=0
        cart.forEach(item =>{
            items += item.qty
            price += item.qty * item.price
        })
        setTotalItems(items)
        setTotalPrice(price)
    },[cart, totalPrice, setTotalPrice, totalItems, setTotalItems])
    
    //console.log(props.shop)
    return (
        <Container>
            <Row className='p-2 text-center'>
                <Col>
                    <Card>
                        <Card.Header>
                            <h3>Cart Summary</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className='text-left p-2'>
                                Total Items: {totalItems} <br/>
                                Delivery Charges : Free <br/>
                                Total Price: {Currency(totalPrice)} <br/>
                            </div>
                            <ButtonGroup style={{width:'100%'}}>
                                <Button variant='primary' onClick={props.clearCart}>
                                    Clear Cart
                                </Button>
                                <Button variant='primary'>
                                    Proceed To Checkout
                                </Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{
        cart: state.shop.cart,
        shop: state.shop
    }
}

export default connect(mapStateToProps, null)(Checkout)

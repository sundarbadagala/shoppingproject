import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col, Card, Button, ButtonGroup} from 'react-bootstrap'
import {Currency} from '../currencyFormat'
import {clearCart, addressData, paymentData} from '../../redux/actions/actions'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import {useHistory} from 'react-router-dom'

function Checkout(props) {
    const {cart} = props
    const [totalPrice, setTotalPrice]= useState(0)
    const [totalItems, setTotalItems]= useState(0)
    const [showAddressForm, setShowAddressForm]= useState(false)
    const [showPaymentForm, setShowPayementForm]= useState(false)
    const history = useHistory()
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
    const sendAddress=(values)=>{
        props.addressData(values)
        setShowPayementForm(true)
    }
    const sendPayment=(paymentMethod,cardNumber, cardCvv, e)=>{
        e.preventDefault()
        props.paymentData({
            method:paymentMethod,
            number:cardNumber,
            cvv: cardCvv
        })
        history.push('/confirm')
    }
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
                                <Button variant='dark' onClick={props.clearCart}>
                                    Clear Cart
                                </Button>
                                <Button variant='dark' onClick={()=>setShowAddressForm(true)}>
                                    Proceed To Checkout
                                </Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='p-2 text-center'>
            <Col>
                {
                    showAddressForm && <AddressForm  sendAddress={sendAddress}/> 
                }
            </Col>
        </Row>
        <Row className='p-2'>
                <Col>
                {
                    showPaymentForm && <PaymentForm send={sendPayment}/> 
                }
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{
        cart: state.shop.cart,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        clearCart: ()=>dispatch(clearCart()),
        addressData: (data)=>dispatch(addressData(data)),
        paymentData: (data)=>dispatch(paymentData(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)

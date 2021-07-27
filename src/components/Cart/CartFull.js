import React from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col} from 'react-bootstrap'
import CartList from './CartList'

function Cart(props) {
    console.log(props.cart)
    return (
        <Container fluid>
            <Row>
                <Col>
                    {
                        props.cart && <CartList/>
                    }
                </Col>
            </Row>
        </Container>
    )
}
const mapStateToProps=(state)=>{
    return{
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps, null)(Cart)

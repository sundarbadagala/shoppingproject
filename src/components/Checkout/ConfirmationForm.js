import React from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import { clearCart } from '../../redux/actions/actions'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function ConfirmationForm({shop, clearCart}) {
    const {address, cart}= shop
    const history= useHistory()
    const clickHanlder=()=>{
        clearCart()
        history.push('/')
    }
    return (
        <Container className='border'>
            <Row className='text-center m-3'>
                <Col>
                    <h4 className='text-success m-2'>Order Confirmed Successfully...</h4><br/>
                </Col>
            </Row>
            <Row>
                <Col className='text-start'>
                        <div className='font-weight-bold'>Thank You Mr/Mrs{address.firstName} {address.lastName}</div>
                        <div>For purchasing </div>
                        {
                            cart.map(item => <div key={item.id}><span>{item.title} </span> <span>{item.qty} {item.qty * item.price}</span></div>)
                        }
                        <Button onClick={clickHanlder}>Home</Button>
                </Col>
            </Row>
        </Container>
    )
}
const mapStateToProps=(state)=>{
    return{
        shop: state.shop
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        clearCart : ()=>dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationForm)

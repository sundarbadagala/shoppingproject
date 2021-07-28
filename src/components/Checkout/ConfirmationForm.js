import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import { clearCart } from '../../redux/actions/actions'
import {Link} from 'react-router-dom'

function ConfirmationForm({shop, clearCart}) {
    const {address}= shop
    console.log(shop)
    return (
        <Container className='text-center' style={{maxWidth:'500px'}}>
            <Row className='m-3'>
                <Col>
                    <h4 className='text-success m-2'>
                        Order Confirmed Successfully...
                    </h4><br/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='font-weight-bold'>
                        Thank You Mr/Mrs {address.firstName} {address.lastName} 
                        <span className='mr-2'>
                            For Purchase
                        </span>
                    </div>
                    <div>
                        Let's do some shopping  
                        <Link to='/' className='text-decoration-none ml-2'>
                            Again
                        </Link>
                    </div>
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

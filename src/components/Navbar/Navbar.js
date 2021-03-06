import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Button, Badge} from 'react-bootstrap'
import {connect} from 'react-redux'

function Navbar({cart}) {
    const [cartCount, setCartCount]= useState(0)
    useEffect(()=>{
        let count=0
        cart && cart.forEach(item => {
            count = count + parseInt(item.qty)
        })
        setCartCount(count)
    },[cart])
    return (
        <Container fluid className='bg-dark p-2'>
            <Row>
                <Col className='ml-3'>
                    <h3>
                        <Link  to='/' className='text-light text-decoration-none font-weight-bold font-italic nav-title'>
                            Shopping Cart
                        </Link>
                    </h3>
                </Col>
                <Col className='d-flex justify-content-end mr-3'>
                <div><Link to='/cart'>
                    <Button variant='secondary'  className='font-weight-bold'>
                        <i className="fas fa-shopping-cart"></i>
                        <span className='m-2 nav-cart-title'>My Cart </span>
                        {
                            cartCount ?<Badge pill variant='warning' className='text-dark'>{cartCount}</Badge> : null
                        }
                    </Button>
                </Link>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{
        cart : state.shop.cart
    }
}

export default connect(mapStateToProps, null)(Navbar)

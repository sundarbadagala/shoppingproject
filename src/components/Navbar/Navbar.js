import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Button, Badge} from 'react-bootstrap'
import {connect} from 'react-redux'

function Navbar({cart}) {
    const [cartCount, setCartCount]= useState(0)
    useEffect(()=>{
        let count=0
        cart && cart.forEach(item => {
            count = count + item.qty
        })
        setCartCount(count)
    },[cart])
    return (
        <Container fluid className='bg-primary p-2'>
            <Row>
                <Col className='ml-3'>
                    <h3>
                        <Link  to='/' className='text-light text-decoration-none font-weight-bold font-italic'>
                            Footwear
                        </Link>
                    </h3>
                </Col>
                <Col className='d-flex justify-content-end mr-3'>
                <Link to='/cart'>
                    <Button variant='warning'  className='font-weight-bold'>
                        <i className="fas fa-shopping-cart"></i>
                        <span className='m-2'>My Cart </span>
                        {
                            cartCount ?<Badge variant='danger'>{cartCount}</Badge> : null
                        }
                    </Button>
                </Link>
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

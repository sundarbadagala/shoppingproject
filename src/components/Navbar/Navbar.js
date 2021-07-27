import React from 'react'
import {Container, Row, Col, Button, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-primary'>
        <Container className='p-2'>
            <Row>
                <Col className=''>
                    <Link to='/' className='h4 font-weight-bold font-italic text-dark text-decoration-none'>
                        Shoping Cart
                    </Link>
                </Col>
                <Col className='text-right'>
                    <Link to='/cart'>
                    <Button variant='warning'>
                        Cart
                        <Badge pill variant='danger' className='ml-2'>
                            2
                        </Badge>
                    </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Navbar

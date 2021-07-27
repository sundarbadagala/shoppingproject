import React from 'react'
import {Container, Row, Col, Button, Badge} from 'react-bootstrap'

function Navbar() {
    return (
        <div className='bg-primary'>
        <Container className='p-2'>
            <Row>
                <Col className='h4 font-weight-bold font-italic'>
                    Shoping Cart
                </Col>
                <Col className='text-right'>
                    <Button variant='warning'>
                        Cart
                        <Badge pill variant='danger' className='ml-2'>
                            2
                        </Badge>
                    </Button>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Navbar

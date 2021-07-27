import React, {useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {Container, Row, Col, Button, ButtonGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { addToCart } from '../../redux/actions/actions'
import axios from 'axios'

function Details(props) {
    const {id}= useParams()
    const [details, setDetails]= useState({})
    console.log(id)
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => setDetails(res.data))
        .catch(error => setDetails(error.message))
    },[id])
    console.log(details)
    return (
        <Container>
        <Row>
            <Col md={4} className='text-center'>
                <img src={details.image} alt='' className='details-banner'/>
            </Col>
            <Col md={8}>
                <div className='font-weight-bold'>
                    <div>Name : {details.title}</div>
                    <div>Price : {details.price}</div><br/>
                </div>
                <div>{details.description}</div>
                <div><br/>
                <ButtonGroup>
                    <Link to='/'>
                        <Button variant='outline-primary'>Go To Home</Button>
                    </Link>
                    <Button variant='outline-primary' onClick={()=>props.addToCart(details.id)}>Add To Cart</Button>
                </ButtonGroup>
                </div>
            </Col>
        </Row>
        </Container>
    )
}


const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart : (id)=>dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(Details)

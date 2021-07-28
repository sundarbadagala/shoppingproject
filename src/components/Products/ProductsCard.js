import React, { useState } from 'react'
import {Card, Button} from 'react-bootstrap'
import {Currency} from '../currencyFormat'
import {connect} from 'react-redux'
import {addToCart} from '../../redux/actions/actions'
import {Link} from 'react-router-dom'

function ProductCard(props) {
    const {product} = props
    const [buttonSize, setButtonSize]= useState('px-4')
    const adjustButtonSize=()=>{
        if(window.innerWidth < 500){
            setButtonSize('px-2')
        }else if(window.innerWidth > 500){
            setButtonSize('px-4')
        }
    }
    window.addEventListener('resize', adjustButtonSize)
    return (
        <div>
            <Card className='m-3 card-width'>
            <Link to={'/product/'+product.id}><Card.Img src={product.image} alt='' className='products-banner'/></Link>
                <Card.Header className='p-2'>
                        <div className='product-title'  style={{height:'50px'}}>{product.title}</div>
                </Card.Header>
                <Card.Body className='p-1'>
                    <div className='d-flex justify-content-around align-items-center font-weight-bold'>
                        {Currency(product.price)}
                    <Button
                        variant='dark' 
                        className={`${buttonSize}`}
                        onClick={()=>props.addToCart(product.id)}
                    >
                    <i className="fas fa-cart-plus"></i>
                    </Button>
            </div>
                </Card.Body>
                
            </Card>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart: (id)=>dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(ProductCard)
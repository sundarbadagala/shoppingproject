import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ProductCard(props) {
    const {product} = props
    return (
        <div>
            <Card className='m-3 card-width'>
                <Link to={'/product/'+product.id}><Card.Img src={product.image} alt='' className='products-banner'/></Link>
                <Card.Header className='p-2'>
                        <div className='product-title'  style={{height:'50px'}}>{product.title}</div>
                </Card.Header>
                <Card.Body className='p-1'>
                    <div className='d-flex justify-content-around align-items-center font-weight-bold'>
                        {product.price}
                    <Button 
                        className='px-4'
                    >
                    <i className="fas fa-cart-plus"></i>
                    </Button>
            </div>
                </Card.Body>
                
            </Card>
        </div>
    )
}


export default ProductCard
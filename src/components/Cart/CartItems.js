import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Currency} from '../currencyFormat'

function CartCard(props) {
    const {product} = props
    const [input, setInput]= useState(product.qty)
    const changeHandler=(e)=>{
        setInput(e.target.value)
    }
    //console.log(props.product)
    return (
        <div className=" d-flex m-1 mb-3 border p-3">
            <div className="">
                <Link to={'/product/'+product.id}>
                <img src={product.image} className="media-object" style={{height:'150px'}} alt='' />
                </Link>
            </div>
            <div className="ml-4">
                <h5>{product.title}</h5>
                <div >
                <input 
                    min='1' 
                    type='number' 
                    id='qty' 
                    name='qty' 
                    value={input} 
                    className='border p-2 cart-input'
                    onChange={changeHandler}
                />
                <i className='fas fa-times mx-1' />
                <span className='font-weight-bold'>
                    {Currency(product.price)}
                </span>
                <i className='fas fa-equals mx-1'/>
                <span className='font-weight-bold'>
                    {Currency(product.qty * product.price)}
                </span>
                <Button 
                    className=' ml-2' 
                    variant='secondary' 
                    size='sm' 
                >
                    <i className="fas fa-trash-alt"></i>
                </Button><br/><br/>
                </div>
            </div>
      </div>
    )
}

export default CartCard

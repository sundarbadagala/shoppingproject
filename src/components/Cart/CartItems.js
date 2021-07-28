import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {Currency} from '../currencyFormat'
import {removeFromCart, adjustQty} from '../../redux/actions/actions'

function CartCard(props) {
    const {product} = props
    const [input, setInput]= useState(product.qty)
    const changeHandler=(e)=>{
        setInput(e.target.value)
        props.adjustQty(product.id, e.target.value)
    }
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
                    onClick={()=>props.removeFromCart(product.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </Button><br/><br/>
                </div>
            </div>
      </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        removeFromCart : (id)=>dispatch(removeFromCart(id)),
        adjustQty: (id, value)=> dispatch(adjustQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(CartCard)

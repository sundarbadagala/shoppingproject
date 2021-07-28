import React from 'react'
import {connect} from 'react-redux'
import CartItems from './CartItems'

function Cart(props) {
    // console.log(props.cart)
    return (
        <div>
        
            {
               props.cart && props.cart.map(item => 
                    <CartItems 
                        key={item.id} 
                        product={item} 
                    />
                )
            }
        
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps, null)(Cart)

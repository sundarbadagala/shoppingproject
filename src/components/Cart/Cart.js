import React from 'react'
import {connect} from 'react-redux'
import CartFull from './CartFull'
import CartEmpty from './CartEmpty'

function Cart(props) {    
    return (
        <React.Fragment>
            {
                props.cart.length ? <CartFull/> : <CartEmpty/>
            }
        </React.Fragment>
    )
}

const mapStateToProps=(state)=>{
    return{
        cart : state.shop.cart
    }
}

export default connect(mapStateToProps, null)(Cart)

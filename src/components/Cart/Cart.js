import React from 'react'
import {connect} from 'react-redux'


function Cart(props) {    
    return (
        <React.Fragment>
            {
                props.cart.length && props.cart.map(item => item.title)
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

import React from 'react'
import {Alert} from 'react-bootstrap'

function CartEmpty() {
    return (
        <Alert variant='' className='text-center'>
            Your cart is currently empty, <Alert.Link href='/'>Add Some Items</Alert.Link>
        </Alert>
    )
}

export default CartEmpty

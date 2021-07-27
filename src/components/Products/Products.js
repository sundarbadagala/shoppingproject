import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchProducts } from '../../redux/actions/actions'

function Products(props) {
    useEffect(()=>{
        props.fetchProducts()
    },[])
    console.log(props.products)
    return (
        <div>
            this is products page
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        products : state.shop.products
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchProducts: ()=>dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

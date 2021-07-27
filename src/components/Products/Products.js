import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchProducts } from '../../redux/actions/actions'

function Products({products, fetchProducts}) {
    useEffect(()=>{
        fetchProducts()
    },[])
    console.log(products)
    return (
        <div>
            {
                products.map(item => item.title)
            }
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

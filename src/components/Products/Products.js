import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchProducts } from '../../redux/actions/actions'
import Loading from './Loading'
import Error from './Error'

function Products({products, fetchProducts, loading, error}) {
    useEffect(()=>{
        fetchProducts()
    },[])
    console.log(products)
    return (
        <div>
            {
                loading ? <Loading/> : error ? <Error error={error}/> : products.map(item => item.title)
            }
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        products : state.shop.products,
        loading: state.shop.loading,
        error: state.shop.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchProducts: ()=>dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)

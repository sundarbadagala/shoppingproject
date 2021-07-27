import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { fetchProducts } from '../../redux/actions/actions'
import Loading from './Loading'
import Error from './Error'
import ProductsCard from './ProductsCard'

function Products({products, fetchProducts, loading, error}) {
    const [cardFlex, setCardFlex]= useState('justify-content-center')
    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])
    const adjustCardFlex=()=>{
        if(window.innerWidth < 500){
            setCardFlex('justify-content-around')
        }else if(window.innerWidth > 500){
            setCardFlex('justify-content-start')
        }
    }
    useEffect(()=>{
        adjustCardFlex()
    },[])
    window.addEventListener('resize', adjustCardFlex)
    console.log(products)
    return (
        <div className={`d-flex flex-wrap ${cardFlex}` }>
            {
                loading ? <Loading/> : error ? <Error error={error}/> : products.map(item => <ProductsCard key={item.id} product={item}/>)
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

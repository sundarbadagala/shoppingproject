import React, { useEffect, useState } from 'react'
import ProductCard from './ProductsCard'
import {connect} from 'react-redux'
import { fetchProducts } from '../../redux/actions/actions'
import Loading from './Loading'
import Error from './Error'
import {Button} from 'react-bootstrap'

function Products({products, shop, cart, fetchProducts, loading, error}) {
    const [category, setCategory]= useState('all')
    const [price, setPrice]= useState('')
    const [cardFlex, setCardFlex]= useState('justify-content-center')
    const [value, setValue]= useState([])
    const [search, setSearch]= useState('')
    const [submitValue, setSubmitValue]= useState('')
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
        category ==='all' ? setValue(products) : setValue(products.filter(item => item.category === category))
    },[category, products])
    const filterProducts=(e)=>{
        setCategory(e.target.value)
    }
    const sortProducts=(e)=>{
        setPrice(e.target.value)
        const sort = e.target.value
        setValue(
            value.slice().sort((a,b)=>(
                sort === 'lowest' ? ((a.price > b.price) ? 1 : -1) :
                sort === 'highest' ? ((a.price < b.price)? 1 : -1) : ((a.id < b.id) ? 1 : -1)
            ))
        )
        console.log(sort)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        setSubmitValue(search)
    }
    useEffect(()=>{
        adjustCardFlex()
    },[])
    window.addEventListener('resize', adjustCardFlex)
    return (
        <div>
        <div className='d-flex justify-content-around p-2 filter-bar'>
            <span>Total Number of Products : {value.length}</span>
            <select value={category} onChange={(e)=>filterProducts(e)}>
            <option value='all'>All</option>
            <option value="men's clothing">Mens clothing</option>
            <option value='jewelery'>jewelery</option>
            <option value='electronics'>electronics</option>
            <option value="women's clothing">woems clothing</option>
            </select>
            <select value={price} onChange={(e)=>sortProducts(e)}>
            <option value='latest'>Latest</option>
            <option value='lowest'>Lowest to Highest</option>
            <option value='highest'>Highest to Lowest</option>
            </select>
            <form onSubmit={submitHandler} className='d-flex align-items-center'>
            <input type='search' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search mobile Here' className='p-0'/>
            <Button variant='outline-dark' size='sm' type='submit'>Search</Button>
            </form>
        </div>
        <div className={`d-flex flex-wrap ${cardFlex}` } >
            {
                loading ? <Loading/> : (error ? <Error error={error}/> : 
                    value
                    .filter(item => item.title.toLowerCase().includes(submitValue.toLocaleLowerCase()))
                    .map(item => <ProductCard key={item.id} product={item} />
                ))
            }
        </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        products: state.shop.products,
        loading: state.shop.loading,
        error:state.shop.error,
        cart: state.shop.cart,
        shop: state.shop
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchProducts: ()=>dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)

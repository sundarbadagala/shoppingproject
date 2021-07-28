import React, { useEffect, useState } from 'react'
import ProductCard from './ProductsCard'
import {connect} from 'react-redux'
import { fetchProducts } from '../../redux/actions/actions'
import Loading from './Loading'
import Error from './Error'
import {Container, Row, Col} from 'react-bootstrap'

function Products({products, fetchProducts, loading, error}) {
    const [category, setCategory]= useState('all')
    const [price, setPrice]= useState('')
    const [cardFlex, setCardFlex]= useState('justify-content-center')
    const [order, setOrder]= useState('order-5')
    const [value, setData]= useState([])
    const [submitValue, setSubmitValue]= useState('')
    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])
    const adjustCardFlex=()=>{
        if(window.innerWidth < 500){
            setCardFlex('justify-content-around')
        }else if(window.innerWidth > 500){
            setCardFlex('justify-content-center')
        }
    }
    const adjustFilterBarOrder=()=>{
        if(window.innerWidth < 500){
            setOrder('order-2')
        }else if(window.innerWidth > 500){
            setOrder('order-5')
        }
    }
    useEffect(()=>{
        category ==='all' ? setData(products) : setData(products.filter(item => item.category === category))
    },[category, products])
    const filterProducts=(e)=>{
        setCategory(e.target.value)
    }
    const sortProducts=(e)=>{
        setPrice(e.target.value)
        const sort = e.target.value
        setData(
            value.sort((a,b)=>(
                sort === 'lowest' ? ((a.price > b.price) ? 1 : -1) :
                sort === 'highest' ? ((a.price < b.price)? 1 : -1) : ((a.id < b.id) ? 1 : -1)
            ))
        )
        console.log(sort)
    }
    useEffect(()=>{
        adjustCardFlex()
        adjustFilterBarOrder()
    },[])
    window.addEventListener('resize', adjustCardFlex)
    window.addEventListener('resize', adjustFilterBarOrder)
    return (
        <Container fluid>
        <Row className='d-flex justify-content-around p-2 filter-bar'>
            <Col md={3} xs={6}  className='order-1'>
                Products : {value.length}
            </Col>
            <Col md={3} xs={6} className='order-3'>
            <span className='mr-1 products-category'>Category</span>
            <select value={category} onChange={(e)=>filterProducts(e)} className=' col-category'>
                <option value='all'>
                    All
                </option>
                <option value="men's clothing">
                    Men's clothing
                </option>
                <option value='jewelery'>
                    Jewelery
                </option>
                <option value='electronics'>
                    Electronics
                </option>
                <option value="women's clothing">
                    Women's clothing
                </option>
            </select>
            </Col>
            <Col md={3} xs={6} className='order-4'>
            <span className='mr-1 products-filter'>Filter</span>
            <select value={price} onChange={(e)=>sortProducts(e)} className=' col-category'>
                <option value='latest'>
                    Latest
                </option>
                <option value='lowest'>
                    Lowest to Highest
                </option>
                <option value='highest'>
                    Highest to Lowest
                </option>
            </select>
            </Col>
            <Col md={3} xs={6} className={`${order}`}>
                <span>
                <i className="fas fa-search"></i>
                </span>
                <input 
                    type='search' 
                    value={submitValue} 
                    onChange={(e)=>setSubmitValue(e.target.value)} 
                    placeholder='Search' 
                    className='p-1 search-input'
                />
            </Col>
        </Row>
        <Row className='products-page'>
           <Col className={`d-flex flex-wrap ${cardFlex}` } >
           {
            loading ? <Loading/> : (error ? <Error error={error}/> : 
                value
                .filter(item => item.title.toLowerCase().includes(submitValue.toLocaleLowerCase()))
                .map(item => <ProductCard key={item.id} product={item} />
            ))
        }
           </Col>
        </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{
        products: state.shop.products,
        loading: state.shop.loading,
        error:state.shop.error,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchProducts: ()=>dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)

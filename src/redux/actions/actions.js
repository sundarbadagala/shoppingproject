import axios from 'axios'
import * as actionTypes from './acitonTypes'


export const fetchProductsReqest=()=>{
    return{
        type: actionTypes.FETCH_PRODUCTS_REQUEST
    }
}
export const fetchProductsSuccess=(products)=>{
    return{
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload:{
            data: products
        }
    }
}
export const fetchProductsFail=(error)=>{
    return{
        type:actionTypes.FETCH_PRODUCTS_FAIL,
        payload:{
            data: error
        }
    }
}
export const fetchProducts=()=>(dispatch)=>{
    dispatch(fetchProductsReqest())
    axios.get('https://fakestoreapi.com/products')
    .then(res => dispatch(fetchProductsSuccess(res.data)))
    .catch(error=> dispatch(fetchProductsFail(error.message)))

}
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

export const addToCart=(itemID)=>{
    return{
        type: actionTypes.ADD_TO_CART,
        payload:{
            id: itemID
        }
    }
}

export const adjustQty=(itemID, value)=>{
    return{
        type: actionTypes.ADJUST_QTY,
        payload:{
            id: itemID,
            qty: value
        }
    }
}

export const removeFromCart=(itemID)=>{
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            id: itemID
        }
    }
}



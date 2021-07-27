import * as actionTypes from '../actions/acitonTypes'

const inititalState={
    loading:false,
    error:'',
    products:[],
    cart:[],
    currentItem:null,
    address:{},
    payment:{}
}



const shopReducer=(state=inititalState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS_REQUEST:
            return{
                ...state, 
                loading:true
            }
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return{
                ...state, 
                loading:false, 
                error:'', 
                products:action.payload.data
            }
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return{
                ...state, 
                loading:false, 
                error:action.payload.data, 
                products:[]
            }
        case actionTypes.ADD_TO_CART:
            const item =state.products.find(item => item.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false) 
            return{
                ...state,
                cart: inCart ? 
                    state.cart.map(item => item.id === action.payload.id ? 
                        {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty:1}]
            }
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
            }
        case actionTypes.CLEAR_CART:
            return{
                ...state,
                cart: []
            }
        case actionTypes.ADD_ADDRESS_DATA:
            return{
                ...state, 
                address:action.payload
            }
        case actionTypes.ADD_PAYMENT_DATA:
            return{
                ...state, 
                payment:action.payload
            }
        default:
            return state
    }
}

export default shopReducer
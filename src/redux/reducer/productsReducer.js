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
            return{...state, loading:true}
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return{...state, loading:false, error:'', products:action.payload.data}
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return{...state, loading:false, error:action.payload.data, products:[]}
        default:
            return state
    }
}

export default shopReducer
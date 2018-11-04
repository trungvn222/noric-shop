import { PRODUCT_ACTION } from '../actions';
const initialState = {
    items: [],
    loading: true,
    error: false,
    message: '',
    totalPage: 0
};
const products = (state = initialState, action) => {
    const { payload } = action;
    switch(action.type){
        case PRODUCT_ACTION.FETCH_PRODUCTS_BEGIN :
        case PRODUCT_ACTION.FETCH_PRODUCTS_SUCCESS :
        case PRODUCT_ACTION.FETCH_PRODUCTS_FAILURE:
            const newState = {...state, ...payload};
            
            return newState;
        default:
            return initialState;
    }
}
export default products;
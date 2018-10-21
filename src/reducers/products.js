import { PRODUCT_ACTION } from '../actions';
const initialState = {
    items: [],
    loading: false,
    error: null
};
const products = (state = initialState, action) => {
    
    switch(action.type){
        case PRODUCT_ACTION.FETCH_PRODUCTS_SUCCESS :
            var items = action.items;
            var newState = { ...state, items};
            return newState;
        default:
            return initialState;
    }
}
export default products;
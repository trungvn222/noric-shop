import { PRODUCT_CATEGORY_ACTION } from '../actions/';

const initState = {
    active : 0,
    items: []
}
const categories = (state = initState, action) => {
    switch(action.type){
        case PRODUCT_CATEGORY_ACTION.FETCH_PRODUCT_CATEGORY_SUCCESS:
            return {...state, ...action.payload};
        case PRODUCT_CATEGORY_ACTION.SWITCH_PRODUCT_CATEGORY:
            return {...state, ...action.payload};;
        default:
            return state;
    }
}

export default categories;
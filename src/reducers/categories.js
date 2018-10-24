import { PRODUCT_CATEGORY_ACTION } from '../actions/';

const initState = {
    items: []
}
const categories = (state = initState, action) => {
    switch(action.type){
        case PRODUCT_CATEGORY_ACTION.FETCH_PRODUCT_CATEGORY_SUCCESS:
            const {items} = action;
            const newState = {...state, items};
            return newState;
        default:
            return state;
    }
}

export default categories;
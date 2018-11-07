import { PRODUCT_CATEGORY_ACTION } from '../actions';

const initState = {
    item: null
}

const category = (state = initState , action) => {
    const payload = action.payload;

    switch(action.type){
        case PRODUCT_CATEGORY_ACTION.FETCH_PRODUCT_CATEGORY_DETAIL_SUCCESS:
            const newState = { ...state,  ...payload};
            return newState;
        default:
            return state;
    }
}

export default category;
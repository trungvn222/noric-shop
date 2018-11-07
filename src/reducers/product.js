import { PRODUCT_ACTION } from '../actions';
const initState = {
    item: null
}

const product = (state = initState, action) => {
    const { payload } = action;
    switch(action.type){
        case PRODUCT_ACTION.FETCH_PRODUCT_DETAIL:
            const newState = {...state, ...payload};
            return newState;
        default:
            return state
    }
}

export default product;
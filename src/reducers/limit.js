import {LIMIT_ACTION} from '../actions';

const initState = {
    items: [],
    limit: 4
}
const limit = (state = initState, action) => {
    switch(action.type){
        case LIMIT_ACTION.LOAD_LIMIT: 
            return {...state, ...action.payload};
        case LIMIT_ACTION.CHANGE_LIMIT:
            const limit = action.payload.limit
            return {...state, limit};
        case LIMIT_ACTION.RESET_LIMIT:
            const newSate = {...state};
            newSate.limit = 4;
            return newSate;
        default:
            return state;
    }
}

export default limit;
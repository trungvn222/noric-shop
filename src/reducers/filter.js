import {FILTER_ACTION} from '../actions';

const initState = {};

const filter = (state = initState, action) => {
    switch(action.type){
        case FILTER_ACTION.CHANGE_FILTERT: 
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default filter;
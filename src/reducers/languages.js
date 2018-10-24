import { LANG_ACTION } from '../actions';
const initState = {
    items: []
};
const languages = ( state = initState, action) => {
    
    switch(action.type){
        case LANG_ACTION.FETCH_LANGUAGES : 
            const items = action.lang;
            const newState = {...state, items};
            return newState;
        default : {
            return state;
        }
    }
}
export default languages
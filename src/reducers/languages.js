import { LANG_ACTION } from '../actions';
const languages = ( state, action) => {
    
    switch(action.type){
        case LANG_ACTION.FETCH_LANGUAGES : {
            return action.lang
        }
        default : {
            return [];
        }
    }
}
export default languages
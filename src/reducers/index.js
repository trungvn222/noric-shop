import {combineReducers} from 'redux';
import languages from './languages';
import products from './products';
import categories from './categories';

export default combineReducers({
    languages,
    products,
    categories
});
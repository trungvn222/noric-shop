import {combineReducers} from 'redux';
import languages from './languages';
import products from './products';

export default combineReducers({
    languages,
    products
});
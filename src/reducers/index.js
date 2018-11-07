import {combineReducers} from 'redux';
import languages from './languages';
import products from './products';
import categories from './categories';
import limit from './limit';
import filter from './filter';
import product from './product';
import category from './category';
import cart from './cart';

export default combineReducers({
    languages,
    products,
    categories,
    limit,
    filter,
    product,
    category,
    cart
});
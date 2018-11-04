import { PRODUCT_ACTION, PRODUCT_CATEGORY_ACTION } from '.';

const handleError = res => {
    
    if(!res.ok){
        throw new Error(res.statusTex);
    }
    return res;
}

const mappingProduct = products => {

    if(!products && products.length == 0){
        return [];
    }
    let newProducts = [];
    products.map( (p) => {
        var newP = p;
        newP['discount'] = p.originalPrice - p.salePrice;
        newP['isSale'] = (p.originalPrice - p.salePrice) !== 0;
        newP['isNew'] = false;
        newP['link'] = `product/${p.id}`;

        newProducts.push(newP);
    } );

    return newProducts;
}

//FETCH DATA
export const fetchProducts = (cat = 0, filter = null) => {
    
    return dispatch => {
        let filterStr = filter && JSON.stringify(filter);
        filterStr = filterStr !== null ? `?filter=${filterStr}` : '';
        let api = !cat ? `http://api.demo.nordiccoder.com/api/products${filterStr}` : `http://api.demo.nordiccoder.com/api/categories/${cat}/products${filterStr}`;
        
        dispatch(fetchProductsBegin());
        return fetch(api)
            .then(handleError)
            .then(res => res.json())
            .then(res => {
                var newData = mappingProduct(res.body);
                var totalPage = res.pagination ? res.pagination.total : 0;
                
                dispatch(fetchProductsSuccess(newData, totalPage));
                return res;
            })
            .catch(error => dispatch(fetchProductsFailure(error)) );
    }
}

//ACTION
export const fetchProductsBegin = () => ({
    type: PRODUCT_ACTION.FETCH_PRODUCTS_BEGIN,
    payload: {
        items: [],
        loading: true,
        error: false,
        message: 'Loading'
    }
})
export const fetchProductsSuccess = (products, totalPage) => ({
    type: PRODUCT_ACTION.FETCH_PRODUCTS_SUCCESS,
    payload: {
        items: products,
        loading: false,
        error: false,
        message: '',
        totalPage
    }
});
export const fetchProductsFailure = message => ({
    type: PRODUCT_ACTION.FETCH_PRODUCTS_FAILURE,
    payload : {
        message: message,
        loading: false,
        error: true,
        items: []
    }
});
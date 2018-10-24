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

        newProducts.push(newP);
    } );

    return newProducts;
}

//FETCH DATA

export const fetchProducts = (cat = 0) => {
    return dispatch => {
        let api = !cat ? 'http://api.demo.nordiccoder.com/api/products' : `http://api.demo.nordiccoder.com/api/categories/${cat}/products`;

        return fetch(api)
            .then(handleError)
            .then(res => res.json())
            .then(res => {
                var newData = mappingProduct(res.body);
                dispatch(fetchProductsSuccess(newData));
                return newData;
            })
            .catch(error => console.log(error) );
    }
}

export const fetchCategory = dispatch => {
    dispatch(fetchProductsBegin());
    return fetch('http://api.demo.nordiccoder.com/api/categories')
    .then(res => res.json())
    .then(res => {
        if(res.body.length > 0){
            var categories = [];
            res.body.map( (cat, index) => {
                let catNew = {...cat, thumbnail: `images/banner_${(index + 1)}.jpg` };
                categories.push(catNew);
            } )
            dispatch(fetchCategorySuccess(categories));
        }
        return res;
    })
    .catch( error => dispatch(fetchProductsFailure(error)) );
}


//ACTION
export const fetchCategorySuccess = categories => ({
    type: PRODUCT_CATEGORY_ACTION.FETCH_PRODUCT_CATEGORY_SUCCESS,
    items: categories,
});

export const fetchProductsBegin = () => ({
    type: PRODUCT_ACTION.FETCH_PRODUCTS_BEGIN,
    payload: {
        items: [],
        loading: true,
        error: false,
        message: 'Loading'
    }
})
export const fetchProductsSuccess = products => ({
    type: PRODUCT_ACTION.FETCH_PRODUCTS_SUCCESS,
    payload: {
        items: products,
        loading: false,
        error: false,
        message: ''
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
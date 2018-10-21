import { PRODUCT_ACTION } from '.';

//FETCH DATA
export const fetchProducts = dispatch => {
    return fetch('http://api.demo.nordiccoder.com/api/products')
        .then(res => res.json())
        .then(res => {
            var newData = [];
            res.body.length && res.body.map( (p) => {
                var newP = p;
                newP['discount'] = p.originalPrice - p.salePrice;
                newP['isSale'] = (p.originalPrice - p.salePrice) !== 0;
                newP['isNew'] = false;

                newData.push(newP);
            } );
            
            dispatch(fetchProductsSuccess(newData));
            return newData;
        }).catch(error => console.log(error) );
}


//ACTION
export const fetchProductsSuccess = products => ({
    type: PRODUCT_ACTION.FETCH_PRODUCTS_SUCCESS,
    items: products
})
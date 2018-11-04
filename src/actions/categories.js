import { PRODUCT_CATEGORY_ACTION } from '.';

export const fetchCategory = dispatch => {
    return fetch('http://api.demo.nordiccoder.com/api/categories')
    .then(res => res.json())
    .then(res => {
        if(res.body.length > 0){
            var categories = [];
            res.body.map( (cat, index) => {
                let link = `/category/${cat.id}`;
                let catNew = {...cat, thumbnail: `images/banner_${(index + 1)}.jpg`, link };
                categories.push(catNew);
            } )
            dispatch(fetchCategorySuccess(categories));
        }
        return res;
    })
    .catch( error => console.log(error) );
}

export const switchCategory = category => {
    return dispatch => {
        dispatch(switchCategorySuccess(category));
    }
}

export const fetchCategorySuccess = categories => ({
    type: PRODUCT_CATEGORY_ACTION.FETCH_PRODUCT_CATEGORY_SUCCESS,
    payload: {
        items: categories
    },
});

export const switchCategorySuccess = category => ({
    type: PRODUCT_CATEGORY_ACTION.SWITCH_PRODUCT_CATEGORY,
    payload: {
        active: category
    }
});
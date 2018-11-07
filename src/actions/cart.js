import { CART_ACTION } from '.';

export const loadCart = () => {
    return dispatch => {
        dispatch(loadCartSucess());
    }
}

export const addItem = (item) => {
    return dispatch => {
        dispatch(addItemSucess(item));
    }
}

export const loadCartSucess = () => ({
    type: CART_ACTION.LOAD_CART
});

export const addItemSucess = item => ({
    type: CART_ACTION.ADD_ITEM,
    payload: {
        item
    }
})
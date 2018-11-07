import { CART_ACTION } from '../actions';

const initState = {
    totalItems: 0,
    totalPrice: 0,
    cart: []
}
const findItemInCart = (cart = [], productID) => {
    let cartLineIndex = -1;
    if(cart.length > 0){
        cartLineIndex = cart.findIndex((v, i) =>  {
            console.log(v.product.id , productID);
            return v.product.id === productID;
        } );
    }
    return cartLineIndex;
}

const totalItems = (cart = []) => {
    let total = 0;
    if(cart.length > 0){
        cart.forEach( v => {
            total += v.quantity;
        } )
    }

    return total;
}

const totalPrice = (cart = []) => {
    let total = 0;
    if(cart.length > 0){
        cart.forEach( v => {
            total += v.quantity * v.product.salePrice;
        } )
    }

    return total;
}
const cart = (state = initState, action) => {
    switch(action.type){
        case CART_ACTION.LOAD_CART:
            return state;
        case CART_ACTION.ADD_ITEM:
            const item = action.payload.item;
            
            let cart = [...state.cart];
            const index = findItemInCart(cart, item.product.id);
            if(index >= 0){
                let quantity = cart[index].quantity;
                cart[index].quantity = quantity + item.quantity;
            }else {
                cart.push(item);
            }
            let total = totalItems(cart);
            let price = totalPrice(cart);
            const newState = {
                totalItems: total,
                totalPrice: price,
                cart
            };
            return newState;
        default:
            return state;

    }
}

export default cart;
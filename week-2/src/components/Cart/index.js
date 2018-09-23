import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Cart extends PureComponent {
    render() {
        const {cartUrl, itemCount} = this.props;
        return (
            <a href={cartUrl}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span id="checkout_items" className="checkout_items">{itemCount}</span>
            </a>
        );
    }
}


export default Cart;
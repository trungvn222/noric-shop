import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import { loadCart } from '../../actions/cart';
import {Link} from 'react-router-dom';

class Cart extends PureComponent {
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(loadCart());
    }
    render() {
        const {cartUrl, itemCount} = this.props;
        return (
            <Link to='/cart'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span id="checkout_items" className="checkout_items">{itemCount}</span>
            </Link>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart.cart,
    itemCount: state.cart.totalItems
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
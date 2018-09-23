import React, { PureComponent } from 'react';
import Currency from '../Currency';

class ProductStatusSale extends PureComponent {
    render() {
        const {discount} = this.props;
        return (
            <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>{ discount ? <Currency price={discount} /> : 'sale' }</span></div>
        );
    }
}

export default ProductStatusSale;
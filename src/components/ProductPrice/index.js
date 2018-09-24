import React, { PureComponent } from 'react';
import Currency from '../Currency';
import './style.css';

class ProductPrice extends PureComponent {
    render() {
        const {originalPrice, salePrice} = this.props;
        return (
            salePrice == originalPrice ? <div className="product_price"><Currency price={originalPrice} /></div> : <div className="product_price"><Currency price={salePrice} /><span><Currency price={originalPrice} /></span></div>
        );
    }
}

export default ProductPrice;
import React, { PureComponent } from 'react';
import Currency from '../Currency';
import './style.css';

class ProductPrice extends PureComponent {
    render() {
        const {regularPrice, salePrice} = this.props;
        return (
            !salePrice ? <div className="product_price"><Currency price={regularPrice} /></div> : <div className="product_price"><Currency price={salePrice} /><span><Currency price={regularPrice} /></span></div>
        );
    }
}

export default ProductPrice;
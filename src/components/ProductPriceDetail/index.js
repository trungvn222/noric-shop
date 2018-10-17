import React, { PureComponent } from 'react';
import Currency from '../Currency';

class ProductPriceDetail extends PureComponent {
    render() {
        const {originalPrice, salePrice} = this.props;
        return (
            
            salePrice == originalPrice ? <div className="original_price"><Currency price={originalPrice} /></div> : <React.Fragment><div className="original_price"><Currency price={originalPrice} /></div><div className="product_price"><Currency price={salePrice} /></div></React.Fragment>
           
        );
    }
}

export default ProductPriceDetail;
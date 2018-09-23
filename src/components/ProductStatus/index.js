import React, { PureComponent } from 'react';
import ProductStatusSale from '../ProductStatusSale';
import ProductStatusNew from '../ProductStatusNew';

import './style.css';

class ProductStatus extends PureComponent {
    render() {
        const {isNew, isSale, discount} = this.props;
        return (
            <React.Fragment>
                { isSale && <ProductStatusSale discount={discount} />}
                { isNew && <ProductStatusNew /> }
            </React.Fragment>
        );
    }
}

export default ProductStatus;
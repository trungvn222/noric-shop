import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class ProductTitle extends PureComponent {
    render() {
        const {link, name} = this.props;
        return (
            <h6 className="product_name"><Link to={link}>{name}</Link></h6>
        );
    }
}

export default ProductTitle;
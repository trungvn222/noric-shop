import React, { PureComponent } from 'react';

class ProductTitle extends PureComponent {
    render() {
        const {link, name} = this.props;
        return (
            <h6 className="product_name"><a href={link}>{name}</a></h6>
        );
    }
}

export default ProductTitle;
import React, { PureComponent } from 'react';
import './style.css';

class ProductThumbnail extends PureComponent {
    render() {
        const {thumbnail, alt} = this.props;
        return (
            <div className="product_image">
                <img src={thumbnail} alt={alt} />
            </div>
        );
    }
}

export default ProductThumbnail;
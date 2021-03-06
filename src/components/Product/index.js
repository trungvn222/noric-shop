import React, { PureComponent } from 'react';
import ProductThumbnail from '../ProductThumbnail';
import ProductStatus from '../ProductStatus';
import ProductTitle from '../ProductTitle';
import ProductPrice from '../ProductPrice';
import './style.css';

class Product extends PureComponent {
    render() {
        const {thumbnail, sale, originalPrice, salePrice, name, link, isNew, isSale, discount} = this.props;
        return (
            <div className="product-item men">
                <div className="product discount product_filter">
                    <ProductThumbnail thumbnail={thumbnail} alt={name} />
                    <div className="favorite favorite_left"></div>
					<ProductStatus isNew={isNew} isSale={isSale} discount={discount} />
                    
                    <div className="product_info">
                        <ProductTitle name={name} link={link} />
                        <ProductPrice originalPrice={originalPrice} salePrice={salePrice} />
                    </div>
                </div>
                <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
            </div>

        );
    }
}

export default Product;
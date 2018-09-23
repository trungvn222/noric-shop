import React, { PureComponent } from 'react';
import Currency from '../Price';
import './style.css';

class Product extends PureComponent {
    render() {
        const {thumbnail, sale, regularPrice, salePrice, name, link, isNew, isSale, discount} = this.props;
        return (
            <div className="product-item men">
                <div className="product discount product_filter">
                    <div className="product_image">
                        <img src={thumbnail} alt={name} />
                    </div>
                    <div className="favorite favorite_left"></div>
					{
                        isSale && <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>{discount ? <Currency price={discount}/> : 'Sale'}</span></div>
                    }
                    {
                        isNew && <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
                    }
                    
                    <div className="product_info">
                        <h6 className="product_name"><a href={link}>{name}</a></h6>
                        {
                            !salePrice ? <div className="product_price"><Currency price={regularPrice} /></div> : <div className="product_price"><Currency price={salePrice} /><span><Currency price={regularPrice} /></span></div>
                        }
                        
                    </div>
                </div>
                <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
            </div>

        );
    }
}

export default Product;
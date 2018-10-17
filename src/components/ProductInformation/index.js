import React, {PureComponent} from 'react';
import ProductQuantity from '../ProductQuantity';
import AddToCart  from '../AddToCart';
import ProductPriceDetail from '../ProductPriceDetail';
import './style.css';

class ProductInformation extends PureComponent {
    state = {
        items : 0
    }
    updateQuantity = (number) => {
        this.setState({
            items: number
        });
    }
    addToCart = () => {
        const {onUpdateCart} = this.props;
        const {items} = this.state;
        onUpdateCart(items);
    }
    render() {
        const {title, description, salePrice, originalPrice} = this.props;
        const {items} = this.state;
        return (
            <div className="product_details">
                <div className="product_details_title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                    <span className="ti-truck"/>
                    <span>free delivery</span>
                </div>
                <ProductPriceDetail salePrice={salePrice}  originalPrice={originalPrice}/>
                <ul className="star_rating">
                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                    <li><i className="fa fa-star" aria-hidden="true"/></li>
                    <li><i className="fa fa-star-o" aria-hidden="true"/></li>
                </ul>
                <div className="product_color">
                    <span>Select Color:</span>
                    <ul>
                    <li style={{
                        background: '#e54e5d'
                    }}/>
                    <li style={{
                        background: '#252525'
                    }}/>
                    <li style={{
                        background: '#60b3f3'
                    }}/>
                    </ul>
                </div>
                <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                    <ProductQuantity afterChange = { (number) => this.updateQuantity(number) } />
                    <AddToCart addToCart={ this.addToCart } />
                    <div className="product_favorite d-flex flex-column align-items-center justify-content-center"/>
                </div>
            </div>

        );
    }
}

export default ProductInformation;
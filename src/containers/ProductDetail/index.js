import React, {PureComponent} from 'react';
import './style.css';
import Breadscrums from '../../components/Breadcrums';
import GalleryProductDetail from '../../components/GalleryProductDetail';
import ProductInformation from '../../components/ProductInformation';
import Tabs from '../../components/Tabs';
import ProductDetailDescription from '../../components/ProductDetailDescription';
import AdditionlInformation from '../../components/AdditionalInfo';
import Reviews from '../../components/Reviews';

/*
    Data
*/
import products from '../../data/products';

class ProductDetail extends PureComponent {
    state = {
        product: {}
    }
    componentDidMount(){
        products.product(1, (data) =>{
            this.setState({
                product: data
            })
        });
    }
    render() {
        const {onUpdateCart} = this.props;
        const {product} = this.state;
        const gallery = product.gallery || [];
        const tabs = [
            {
                key : 'des',
                name : 'Description',
                content : <ProductDetailDescription {...product.description} />
            },
            {
                key : 'addition',
                name : 'Additional Information',
                content : <AdditionlInformation><p>COLOR:<span>Gold, Red</span></p>
                <p>SIZE:<span>L,M,XL</span></p></AdditionlInformation>
            },
            {
                key : 'reviews',
                name : 'Reviews (2)',
                content : <Reviews />
            }
        ]
        const breadsCrums = [
            {
                url : '/',
                label : 'Home',
                isActive : false
            },
            {
                url : '/category/1',
                label : 'Men\'s',
                isActive : false
            },
            {
                url : '',
                label : 'Single Product',
                isActive : true
            }
        ];
        const Delimiter = () => <i className="fa fa-angle-right" aria-hidden="true"></i>;

        return (
            <div className="container single_product_container">
                <div className="row">
                    <div className="col">
                        <Breadscrums items={breadsCrums} delimiter={<Delimiter />} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        {gallery.length > 0 && <GalleryProductDetail gallery={gallery} />}
                    </div>
                    <div className="col-lg-5">
                        <ProductInformation salePrice={product.salePrice} originalPrice={product.originalPrice} title={product.name} description={product.shortDescription} onUpdateCart={onUpdateCart} />
                    </div>
                </div>
                <Tabs tabs={tabs} active="des" />               
                
            </div>
        );
    }
}

export default ProductDetail;
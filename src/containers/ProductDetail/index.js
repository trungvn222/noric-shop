import React, {PureComponent} from 'react';
import './style.css';
import Breadscrums from '../../components/Breadcrums';
import GalleryProductDetail from '../../components/GalleryProductDetail';
import ProductInformation from '../../components/ProductInformation';
import Tabs from '../../components/Tabs';
import ProductDetailDescription from '../../components/ProductDetailDescription';
import AdditionlInformation from '../../components/AdditionalInfo';
import Reviews from '../../components/Reviews';
import {connect} from 'react-redux';
import { fetchProductDetail } from '../../actions/products';
import { fetchCategoryDetail } from '../../actions/categories';
import { addItem } from '../../actions/cart';

/*
    Data
*/

class ProductDetail extends React.Component {
    
    breadCrums = [];

    constructor(props){
        super(props);
        this.breadCrums.push({
            id: 'home',
            label: 'Home',
            active: false,
            url: '/'
        });
    }

    componentDidMount(){
        const {match, dispatch} = this.props;
        dispatch(fetchProductDetail(match.params.id));
    }

    componentWillUpdate(nextProps, nextState) {
        const {category, product} = nextProps;

        if(category !== null){
            this.breadCrums.push({
                id : category.id,
                label : category.name,
                active: false,
                url: `/category/${category.id}`
            });
            if(product !== null){
                this.breadCrums.push({
                    id : product.id,
                    label : product.name,
                    active: true,
                    url: `/product/${product.id}`
                });
            }
        }
        
    }

    componentDidUpdate(prevProps){

        const {product, dispatch, category} = this.props;
        if(category === null){
            dispatch(fetchCategoryDetail(product.categoryId || 0));
            
        }else{
            
            this.breadCrums.push({
                id : category.id,
                label : category.name,
                active: false,
                url: `/category/${category.id}`
            });
            if(product !== null){
                this.breadCrums.push({
                    id : product.id,
                    label : product.name,
                    active: true,
                    url: `/product/${product.id}`
                });
            }
        }
    }

    onUpdateCart = (items) => {
        const {product, dispatch} = this.props;
        dispatch(addItem({
            quantity: items,
            product
        }));
    }

    render() {
        const {onUpdateCart, product} = this.props;

        if(product === null){
            return null;
        }
        
        const gallery = product.gallery || [];
        // const tabs = [
        //     {
        //         key : 'des',
        //         name : 'Description',
        //         content : <ProductDetailDescription {...product.description} />
        //     },
        //     {
        //         key : 'addition',
        //         name : 'Additional Information',
        //         content : <AdditionlInformation><p>COLOR:<span>Gold, Red</span></p>
        //         <p>SIZE:<span>L,M,XL</span></p></AdditionlInformation>
        //     },
        //     {
        //         key : 'reviews',
        //         name : 'Reviews (2)',
        //         content : <Reviews />
        //     }
        // ]
        
        const Delimiter = () => <i className="fa fa-angle-right" aria-hidden="true"></i>;
        
        return (
            <div className="container single_product_container">
                <div className="row">
                    <div className="col">
                        {this.breadCrums.length > 1 && <Breadscrums items={this.breadCrums} delimiter={<Delimiter />} />}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        {gallery.length > 0 && <GalleryProductDetail gallery={gallery} />}
                    </div>
                    <div className="col-lg-5">
                        <ProductInformation salePrice={product.salePrice} originalPrice={product.originalPrice} title={product.name} description={product.shortDescription} onUpdateCart={this.onUpdateCart} />
                    </div>
                </div>
                {/* <Tabs tabs={tabs} active="des" />                */}
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.product.item,
        category: state.category.item
    };
};
const mapDispatchToProps =  null;
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
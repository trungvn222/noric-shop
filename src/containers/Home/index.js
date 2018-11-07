import React, { PureComponent } from 'react';
import Slider from '../../components/Slider';
import QuickCategories from '../../components/QuickCategories';
import DealOfTheWeek from '../../components/DealOfTheWeek';
import ShippingInformationBar from '../../components/ShippingInformationBar';
import NewArrival from '../../components/NewArrival';
import {connect} from 'react-redux';
import { fetchCategory, switchCategory } from '../../actions/categories';
import { fetchProducts } from '../../actions/products';
import { addItem } from '../../actions/cart';
import './style.css';


class Home extends React.Component {
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(fetchProducts());
        dispatch(fetchCategory)
    }

    onChangeCategory = (category) => {
        const {dispatch} = this.props;
        dispatch(switchCategory(category));
        dispatch(fetchProducts(category));
        
    }
    addToCart = product => {
        const { dispatch } = this.props;
        const item = {
            quantity: 1,
            product
        };

        dispatch(addItem(item));
    }

    render() {
        const {categories, products, selectedCategory} = this.props;
        return (
            <React.Fragment>
                <Slider />
                <QuickCategories categories={categories} />
                <NewArrival addToCart={this.addToCart} products = {products} categories={categories} selectedCategory={selectedCategory} onChangeCategory={this.onChangeCategory}  />
                <DealOfTheWeek />
                <ShippingInformationBar />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    categories : state.categories.items,
    selectedCategory : state.categories.active,
    products : state.products.items
});
const mapDispathToProps = null;

export default connect(mapStateToProps, mapDispathToProps)(Home);
import React, { PureComponent } from 'react';
import Slider from '../../components/Slider';
import QuickCategories from '../../components/QuickCategories';
import DealOfTheWeek from '../../components/DealOfTheWeek';
import ShippingInformationBar from '../../components/ShippingInformationBar';
import NewArrival from '../../components/NewArrival';
import {connect} from 'react-redux';
import { fetchCategory, switchCategory } from '../../actions/categories';
import { fetchProducts } from '../../actions/products';
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

    render() {
        const {categories, products, selectedCategory} = this.props;
        return (
            <React.Fragment>
                <Slider />
                <QuickCategories categories={categories} />
                <NewArrival products = {products} categories={categories} selectedCategory={selectedCategory} onChangeCategory={this.onChangeCategory}  />
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
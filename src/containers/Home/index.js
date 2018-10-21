import React, { PureComponent } from 'react';
import Slider from '../../components/Slider';
import QuickCategories from '../../components/QuickCategories';
import DealOfTheWeek from '../../components/DealOfTheWeek';
import ShippingInformationBar from '../../components/ShippingInformationBar';
import NewArrival from '../../components/NewArrival';

import './style.css';


class Home extends PureComponent {
    render() {
        const {categories, products, onFilterProducts, selectedCategory} = this.props;
        return (
            <React.Fragment>
                <Slider />
                <QuickCategories categories={categories} />
                <NewArrival  />
                <DealOfTheWeek />
                <ShippingInformationBar />
            </React.Fragment>
        );
    }
}

export default Home;
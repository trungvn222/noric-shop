import React, { PureComponent } from 'react';
import ListCategoriesItem from '../ListCategoriesItem';
import './style.css';

class ListCategories extends PureComponent {
    render() {
        const { categories, selectedCategory, onChangeCategory } = this.props;
        return (
            <ul className="sidebar_categories">
                <ListCategoriesItem key={0} name={'All'} link='/category' onChangeCategory={() => { onChangeCategory(0) }} active={ selectedCategory === 0 } />
            {
                categories && categories.map((cat, index) => <ListCategoriesItem onChangeCategory={() => { onChangeCategory(cat.id) }} key={cat.id} {...cat} active={ selectedCategory === cat.id } /> )
            }
            </ul>
        );
    }
}


export default ListCategories;
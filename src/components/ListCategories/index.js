import React, { PureComponent } from 'react';
import ListCategoriesItem from '../ListCategoriesItem';
import './style.css';

class ListCategories extends PureComponent {
    render() {
        const { categories, onFilterByCategory, selectedCategory } = this.props;
        return (
            <ul className="sidebar_categories">
                <ListCategoriesItem key={0} name={'All'} onClick={ () => onFilterByCategory(0) } active={ selectedCategory === 0 } />
            {
                categories && categories.map((cat, index) => <ListCategoriesItem key={cat.id} name={cat.name} onClick={ () => onFilterByCategory(cat.id) } active={ selectedCategory === cat.id } /> )
            }
            </ul>
        );
    }
}


export default ListCategories;
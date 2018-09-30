import React, { PureComponent } from 'react';
import ListCategories  from '../../components/ListCategories';
import Products from '../../components/Products';
import Widget from '../../components/Widget';
import Breadcrums from '../../components/Breadcrums';
import ProductsSort from '../../components/ProductsSort';
import PostsPerPage from '../../components/PostsPerPage';
import Pagination from '../../components/Pagination';

import './style.css';


class Categories extends PureComponent {
    render() {
        const { 
            categories = [], 
            products = [], 
            selectedCategory = 0, 
            onFilterByCategory, 
            currentSort = {}, 
            onSort,
            sortList = [],
            postsPerPage = [],
            currentPostsPerPage = 10,
            onShow,
            paged = 0,
            total = 0,
            onPagination } = this.props;
        return (
            <div className="container product_section_container">
                <div className="row">
                    <div className="col product_section clearfix">
                        <Breadcrums />
                        <div className="sidebar">
                            <Widget title="Product Category">
                                { <ListCategories onFilterByCategory={onFilterByCategory} categories={categories} selectedCategory={selectedCategory} /> }
                            </Widget>
                        </div>
                        <div className="main_content">
                            <div className="products_iso">
						        <div className="row">
							        <div className="col">
                                        <div class="product_sorting_container product_sorting_container_top">
                                            <ul class="product_sorting">
                                                <li>
                                                    <ProductsSort onSort={onSort} currentSort={currentSort} sortList={sortList} />
                                                </li>
                                                <li>
                                                    <PostsPerPage list={postsPerPage} onSelect={ onShow } current={currentPostsPerPage} />
                                                </li>
                                            </ul>
                                            <Pagination paged={paged} total={total} onPagination={onPagination} />
                                        </div>
                                        { <Products products={products} /> }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Categories.propTypes = {

};

export default Categories;
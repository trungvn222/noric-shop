import React, { PureComponent } from 'react';
import ListCategories  from '../../components/ListCategories';
import Products from '../../components/Products';
import Widget from '../../components/Widget';
import Breadcrums from '../../components/Breadcrums';
import ProductsSort from '../../components/ProductsSort';
import PostsPerPage from '../../components/PostsPerPage';
import Pagination from '../../components/Pagination';
import ShippingInformationBar from '../../components/ShippingInformationBar';
import PriceFilter from '../../components/PriceFilter';

import './style.css';


class Categories extends PureComponent {
    render() {
        const { 
            categories = [], 
            products = [], 
            selectedCategory = 0, 
            onFilterByCategory, 
            onFilterByPrice,
            currentSort = {}, 
            onSort,
            sortList = [],
            postsPerPage = [],
            currentPostsPerPage = 10,
            onShow,
            paged = 0,
            total = 0,
            onPagination,
            limit,
            offset,
            totalPosts,
            defaultMinPrice,
            defaultMaxPrice } = this.props;
            
        

        return (
            <React.Fragment>
                <div className="container product_section_container">
                    <div className="row">
                        <div className="col product_section clearfix">
                            <Breadcrums />
                            <div className="sidebar">
                                <Widget title="Product Category">
                                    <ListCategories onFilterByCategory={onFilterByCategory} categories={categories} selectedCategory={selectedCategory} />
                                </Widget>
                                <Widget title="Filter by Price">
                                    <PriceFilter minPrice={0} maxPrice={defaultMaxPrice} onFilterByPrice={onFilterByPrice} />
                                </Widget>
                            </div>
                            <div className="main_content">
                                <div className="products_iso">
                                    <div className="row">
                                        <div className="col">
                                            <div className="product_sorting_container product_sorting_container_top">
                                                <ul className="product_sorting">
                                                    <li>
                                                        <ProductsSort onSort={onSort} currentSort={currentSort} sortList={sortList} />
                                                    </li>
                                                    <li>
                                                        <PostsPerPage list={postsPerPage} onSelect={ onShow } current={currentPostsPerPage} />
                                                    </li>
                                                </ul>
                                                <Pagination paged={paged} total={total} onPagination={onPagination} />
                                            </div>
                                            { products.length > 0 && <Products products={products} /> }
                                            <div className="product_sorting_container product_sorting_container_bottom clearfix">
                                                <ul className="product_sorting">
                                                    <li>
                                                        <PostsPerPage list={postsPerPage} onSelect={ onShow } current={currentPostsPerPage} />
                                                    </li>
                                                </ul>
                                                <span className="showing_results">Showing {offset} – {limit} of {totalPosts} results</span>
                                                <Pagination paged={paged} total={total} onPagination={onPagination} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ShippingInformationBar />
            </React.Fragment>
        );
    }
}

export default Categories;
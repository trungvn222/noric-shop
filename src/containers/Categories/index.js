import React, { PureComponent } from 'react';
import {Redirect} from 'react-router';
import ListCategories  from '../../components/ListCategories';
import Products from '../../components/Products';
import Widget from '../../components/Widget';
import Breadcrums from '../../components/Breadcrums';
import ProductsSort from '../../components/ProductsSort';
import PostsPerPage from '../../components/PostsPerPage';
import Pagination from '../../components/Pagination';
import ShippingInformationBar from '../../components/ShippingInformationBar';
import PriceFilter from '../../components/PriceFilter';

import {connect} from 'react-redux';

//action
import { fetchCategory, switchCategory } from '../../actions/categories';
import { fetchProducts } from '../../actions/products';
import { addCrumb, findCategoryById } from '../../helper/breadcrums';
import { loadLimit, changeLimit, resetLimit } from '../../actions/posts-per-page';

//helper
import { parseFilter, addFilterQueryString } from '../../helper/query';

import './style.css';

const delimiter = <i className="fa fa-angle-right" aria-hidden="true"></i>;

class Categories extends PureComponent {
    state = {
        page : 1,
        limit: 4,
        cat : 0
    }
    
    filter = () => {
        const { match } = this.props;
        const { limit, page } = this.state;

        const paged = match.params.page ? parseInt(match.params.page) :  page;
        
        const filter = { limit, skip: (paged - 1)*limit };
        return filter;
    }

    resetFilter = () => {
        this.setState({
            page: 1,
            limit: 4
        });
    }

    componentDidMount(){
        const {dispatch, match} = this.props;
        const filter = this.filter();
        dispatch(loadLimit);
        dispatch(fetchCategory);
        dispatch(fetchProducts(match.params.id || 0, filter));
        
    }

    onChangeCategory = (cat) => {
        const {dispatch, history} = this.props;

        this.resetFilter();
        this.setState({
            cat: cat
        });
        dispatch(switchCategory(cat));
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        const oldPage = prevState.page;
        const oldLimit = prevState.limit;
        const oldCat = prevState.cat;
        const { match, dispatch } = this.props;
        const {limit, page, cat} = this.state;
        
        if( oldPage != page || limit != oldLimit || cat != oldCat ){
            dispatch(fetchProducts(match.params.id || 0, {
                limit,
                skip: limit*(page-1)
            }));
        }
    }

    onChangeLimit = limit => {
        const {dispatch, match, history} = this.props;
        const baseUrl = match.url.split('/page')[0];
        history.push(baseUrl);
        this.setState({
            limit
        });
    }

    onChangePagination = (page) => {
        const {dispatch, match } = this.props;
        const filter = this.filter();
        this.setState({
            page
        });
    }

    render() {
        const { 
            match,
            categories = [], 
            products = [], 
            selectedCategory = 0, 
            currentSort = {}, 
            onSort,
            sortList = [],
            limitItems = [],
            offset
            } = this.props;
        const { limit, page } = this.state;
        const totalItems = 32;
        const paged = match.params.page || page;
        const totalPage =  Math.round(totalItems/limit + 0.4); 
        const baseUrl = match.url.split('/page')[0];

        let currentCategory = match.params.id ? findCategoryById(categories)(match.params.id) : null;
        
        let crumb = {
            label : !match.params.id ? 'Shop' : currentCategory !== null ? currentCategory.name : '',
            active : true,
            url : match.url
        }
        const breadcrums  = addCrumb(crumb);
        
        
        return (
            <React.Fragment>
                <div className="container product_section_container">
                    <div className="row">
                        <div className="col product_section clearfix">
                            <Breadcrums items={breadcrums} delimiter={delimiter}  />
                            <div className="sidebar">
                                <Widget title="Product Category">
                                    <ListCategories onChangeCategory={ this.onChangeCategory } categories={categories} selectedCategory={selectedCategory} />
                                </Widget>
                                <Widget title="Filter by Price">
                                    {/* <PriceFilter minPrice={0} maxPrice={defaultMaxPrice} onFilterByPrice={onFilterByPrice} /> */}
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
                                                        <PostsPerPage list={limitItems} onChangeLimit={ this.onChangeLimit } current={limit} />
                                                    </li>
                                                </ul>
                                                <Pagination baseUrl={baseUrl} paged={paged} total={totalPage} onChangePagination={this.onChangePagination} />
                                            </div>
                                            <Products products={products} />
                                            <div className="product_sorting_container product_sorting_container_bottom clearfix">
                                                <ul className="product_sorting">
                                                    <li>
                                                        <PostsPerPage list={limitItems} onChangeLimit={ this.onChangeLimit } current={limit} />
                                                    </li>
                                                </ul>
                                                <span className="showing_results">Showing {offset} – {limit} of {totalItems} results</span>
                                                <Pagination paged={paged} baseUrl={baseUrl} total={totalPage} onChangePagination={this.onChangePagination} />
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

const mapStateToProps = state => ({
    products: state.products.items,
    totalItems: state.products.totalPage,
    categories: state.categories.items,
    selectedCategory: state.categories.selectedCategory,
    products: state.products.items,
    limitItems: state.limit.items,
    limit: state.limit.limit,
    filter: state.filter
});
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
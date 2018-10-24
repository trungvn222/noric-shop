import React, { PureComponent } from 'react';
import QuickCategory from '../QuickCategory';
import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/products';
import './style.css';

class QuickCategories extends PureComponent {
    componentDidMount(){
        fetchCategory(this.props.dispatch);
    }
    render() {
        const {categories = []} = this.props;
        if(!categories.length){
            return null;
        }
        return (
            <div className="banner">
		        <div className="container">
			        <div className="row">
                    {
                        categories.map(cat => <QuickCategory key={cat.id} {...cat} /> )
                    }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories.items
});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(QuickCategories);
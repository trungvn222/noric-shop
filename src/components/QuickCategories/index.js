import React, { PureComponent } from 'react';
import QuickCategory from '../QuickCategory';

import './style.css';

class QuickCategories extends PureComponent {
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


export default QuickCategories;
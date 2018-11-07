import React, { PureComponent } from 'react';
import './style.css';

class Breadcrums extends React.Component {
    render() {
        const { items = [], delimiter } = this.props
        console.log('crumbs', items.length, items);
        if(items.length === 0){
            return null;
        }
        return (
            <div className="breadcrumbs d-flex flex-row align-items-center">
                <ul>
                    {
                        items.map(( value, index ) => {
                            return(
                                <li key={index} className={ value.isActive ? 'active': '' }><a href={value.url}>
                                    {index > 0 && delimiter}{value.label}</a>
                                </li>
                            )
                        })
                    }
                    
                </ul>
			</div>
        );
    }
}


export default Breadcrums;
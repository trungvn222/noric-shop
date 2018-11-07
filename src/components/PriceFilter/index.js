import React, { PureComponent } from 'react';
import Slider, { Range } from 'rc-slider';
import Currency from '../Currency';
import 'rc-slider/assets/index.css';
import './style.css';



class PriceFilter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
           min : 0,
           max : props.maxPrice
        }
        
    }
    
    onChange(v){
        this.setState({
            min: v[0],
            max: v[1]
        });
    }
    onAfterChange(v){
        this.props.onFilterByPrice(v);
    }
    render() {
        const { min, max } = this.state;
        let { minPrice, maxPrice, defaultValue } = this.props;
        
        return (
            <div>
                <div id="amount">
                    <Currency price={min} />{" - "}<Currency price={max} />
                </div>
                <Range  min={minPrice} max={maxPrice} defaultValue={defaultValue} onAfterChange={ this.onAfterChange.bind(this) } onChange={ this.onChange.bind(this) } />
            </div>
        );
    }
}


export default PriceFilter;
import React, { PureComponent } from 'react';
import './style.css';

class AdditionlInformation extends PureComponent {
    render() {
        return (
            <div className="row">
                <div className="col additional_info_col">
                    <div className="tab_title additional_info_title">
                        <h4>Additional Information</h4>
                    </div>
                    {this.props.children}
                </div>
			</div>
        );
    }
}

export default AdditionlInformation;
import React, { PureComponent } from 'react';
import Timer from '../Timer';
import './style.css';

class DealOfTheWeek extends PureComponent {
    render() {
        return (
        <div className="deal_ofthe_week">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="deal_ofthe_week_img">
                            <img src="images/deal_ofthe_week.png" alt />
                        </div>
                    </div>
                    <div className="col-lg-6 text-right deal_ofthe_week_col">
                        <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                            <div className="section_title">
                                <h2>Deal Of The Week</h2>
                            </div>
                            <Timer />
                            <div className="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


export default DealOfTheWeek;
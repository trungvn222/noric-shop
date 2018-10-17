import React, { PureComponent } from 'react';
import './style.css';

class Tabs extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            active : props.active
        }

        this.onClick = (key, e) => {
            e.preventDefault();
            this.setState({
                active: key
            });
            console.log(key);
        }
    }
    render() {
        const {tabs} = this.props;
        const {active} = this.state;
        if(tabs.length  == 0){
            return null;
        }
        let tabMenu = [];
        let tabContent = null;
        tabs.forEach(tab => {
            tabMenu.push(<li key={tab.key} className={ tab.key === active ? 'tab active' : 'tab' }><a href="#" onClick={ (e) => this.onClick(tab.key, e) } >{tab.name}</a></li>);

            if(tab.key === active){
                tabContent = <div className={ tab.key === active ? 'tab_container active' : 'tab_container' }>{tab.content}</div> ;
            }
        });
        return (
            <div className="tabs_section_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="tabs_container">
                                <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                                {tabMenu}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {tabContent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabs;
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { fetchLanguages } from '../../actions/languages'
import { bindActionCreators } from 'redux';

import './style.css';

class Languages extends PureComponent {
	componentDidMount(){
		fetchLanguages(this.props.dispatch);
	}
    render() {
		const {languages = []} = this.props;
		
		if(languages.length == 0){
			return null;
		}

		const currentLanguage = languages.find( l => l.active );
		const restLanguages = languages.filter( l => !l.active ).map( (l,index) => {
			return(
				<li key={l.code}><a href={l.link}>{l.name}</a></li>
			)
		} );


		
        return (
            <React.Fragment>
				{ currentLanguage && <a href={currentLanguage.link}>
					{currentLanguage.name}
					<FontAwesomeIcon icon={faAngleDown} />
				</a> }
                
				{ restLanguages && <ul className="language_selection">{restLanguages}</ul> }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
	languages: state.languages.items
})
const mapDispathToProps = null;

export default connect(mapStateToProps, mapDispathToProps)(Languages);
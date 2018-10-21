import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionLang from '../../actions/languages'

import './style.css';

class Languages extends PureComponent {
	componentDidMount(){
		this.props.actionLang.get();
	}
    render() {
		const {languages = []} = this.props;
		const currentLanguage = languages.find( l => l.active );
		const restLanguages = languages.filter( l => !l.active ).map( l => {
			return(
				<li key={l.code}><a href={l.link}>{l.name}</a></li>
			)
		} );

		if(languages.length == 0){
			return null;
		}
		
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
	languages: state.languages	
})
const mapDispathToProps = dispatch => ({
	actionLang: bindActionCreators(actionLang, dispatch)
});

export default connect(mapStateToProps, mapDispathToProps)(Languages);
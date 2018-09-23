import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import './style.css';

class Languages extends PureComponent {
    render() {
		const {languages} = this.props;
		const currentLanguage = languages.filter( l => l.active );
		const restLanguages = languages.filter( l => !l.active ).map( l => {
			return(
				<li key={l.code}><a href={l.link}>{l.name}</a></li>
			)
		} );
		if(languages.length){
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

export default Languages;
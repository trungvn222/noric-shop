import React, { PureComponent } from 'react';
import './style.css';

const LoadingContaier = loadCompleted => WrappedComponent => {
    return class Loading extends PureComponent {
        render() {
            return (this.props[loadCompleted] === undefined && !this.props[loadCompleted]) ? <div className="loading" /> : <WrappedComponent {...this.props} />;
        }
    }
}


export default LoadingContaier;
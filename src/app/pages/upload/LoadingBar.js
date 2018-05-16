import React from 'react';


class LoadingBar extends React.Component {
    render() {
        return (
            <div>
                <div className="barLoading"></div>
                <h4 className="barState">Loading...</h4>
            </div>
        );
    }
}

export default LoadingBar;

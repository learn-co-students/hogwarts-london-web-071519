import React from 'react';
import ShowHogDetailsElement from './ShowHogDetailsElement'


class Hog extends React.Component {

    state = {
        hogDetails: false
    }

    showHogDetails = () => {
        this.setState({ hogDetails: !this.state.hogDetails })
    }

    render() {
        const picUrl = () => require('../hog-imgs/' + this.props.hog.name.toLowerCase().replace(/ /g, '_') + '.jpg')
 

        return (
            <div id="HogElement" onClick={this.showHogDetails} className="ui eight wide column">
                <h1>{this.props.hog.name}</h1>
                <img src={picUrl()} alt=''/>
                <p>Weight: {this.props.hog.weight}</p>
                {this.state.hogDetails ? < ShowHogDetailsElement hog={this.props.hog} /> : null}
            </div>
        )
    }
}

export default Hog

import React from 'react';
import Hog from './Hog'

class HogsList extends React.Component {

    render() {
        return (
            <div >
                {this.props.hogs.map(hog => (
                    < Hog key={hog.id} hog={hog} />
                ))}
            </div>
        )
    }
}

export default HogsList
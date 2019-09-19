import React from 'react'
import PigInfo from './PigInfo'

class Pig extends React.Component {

    state = {
        showHogInfo: false
    }

    fileName = this.props.hog.name.toLowerCase().replace(/ /g, '_')
    actualPath = require(`../hog-imgs/${this.fileName}.jpg`)

    toggleFilter = () => {
        this.setState({showHogInfo: !this.state.showHogInfo})
    }

    render() {
        return (
            <div className='pigTile' onClick={this.toggleFilter} >
                <img src={this.actualPath} alt='' />
                <h3>{this.props.hog.name} Status: {this.props.hog.greased && 'Greased'}</h3>
                {this.state.showHogInfo && <PigInfo hog={this.props.hog} />}
            </div>
        )
    }
            
}

export default Pig
import React, { Component } from 'react'

import Pig from './Pig'

class PigsContainer extends Component {

    render () {
        return (
            <div className='ui grid container'>
                {this.props.hogs.map((hog, indx) =>  <Pig hog={hog} key={hog.name} />)}
            </div>
        )
    }
}

export default PigsContainer
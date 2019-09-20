import React from 'react'
import hogs from '../porkers_data'


export default class Pig extends React.Component {
    
    
    state = {
        showInfo: false
    }

    info = () => [
       this.state.showInfo === true ? this.setState({showInfo: false}) : this.setState({showInfo: true})
    ]

    pigPath = this.props.pig.name.toLowerCase().replace(/ /g, '_') + `.jpg`
    pigImagesPath = require(`../hog-imgs/${this.pigPath}`)
    pigClasses = ["pigTile"]
    pigInfo = <ul><li>{this.props.pig.specialty}</li><li>{this.props.pig.greased}</li><li>{this.props.pig.weight}</li><li>{this.props.pig['highest medal achieved']}</li></ul>
    
    render() {
    return <div onClick={() => this.info()} className="ui eight wide column">
            <div className ={this.pigClasses}>
            <h3>{this.props.pig.name} {hogs.greased && '💦'}</h3>
            <img src={this.pigImagesPath} alt=""/>
            {this.state.showInfo === true ? this.pigInfo : ""}
            </div>
            </div>
    }
}
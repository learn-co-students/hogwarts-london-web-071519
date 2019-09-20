import React from 'react'
import Pig from './Pig'

export default class Pigs extends React.Component {

    render() {
        const pig = this.props.pigs.map(pig => <Pig key={pig.name} pig={pig} />)
        return <div className="ui grid container">{pig}</div>
    }
}
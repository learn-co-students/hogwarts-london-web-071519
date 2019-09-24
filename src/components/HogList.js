import React, {Component} from 'react';
import Hog from './Hog';

export default class HogList extends Component {
	listHogs = () => this.props.hogs.map((hog) => <Hog hog={hog} />);

	render() {
		return <div>{this.listHogs()}</div>;
	}
}

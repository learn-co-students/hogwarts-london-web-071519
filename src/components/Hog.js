import React, {Component} from 'react';
export default class Hog extends Component {
	state = {
		isClicked: false,
		isHidden: false
	};

	handleClick = () => {
		this.setState({isClicked: !this.state.isClicked});
	};

	isHogClicked = () => {
		if (this.state.isClicked) {
			return this.props.hog.specialty;
		}
	};

	hideHog = () => {
		this.setState({isHidden: true});
	};

	showHog = () => {
		if (!this.state.isHidden) {
			return (
				<div>
					<img
						src={this.imgUrl(this.props.hog.name)}
						alt={this.props.hog.name}
						onClick={this.handleClick}
					></img>
					<span onClick={this.hideHog}>Hide</span>
					<h2>{this.props.hog.name}</h2>
					<p>{this.isHogClicked()}</p>
					<br />
					<br />
				</div>
			);
		}
	};

	imgUrl = (name) => {
		return '../hog-imgs/' + name.toLowerCase().replace(/ /g, '_') + '.jpg';
	};
	render() {
		return <div>{this.showHog()}</div>;
	}
}

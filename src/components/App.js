import React, {Component} from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogList from './HogList';

class App extends Component {
	state = {
		hogs: [],
		filter: 'all',
		sortBy: ''
	};

	filterHogs = () => {
		if (this.state.filter === 'greased') {
			return this.state.hogs.filter((hog) => hog.greased === true);
		} else {
			return this.state.hogs;
		}
	};

	filterednSortedHogs = () => {
		if (this.state.sortBy === 'name') {
			return this.filterHogs().sort((a, b) => {
				let hogNameA = a.name.toLowerCase();
				let hogNameB = b.name.toLowerCase();
				return hogNameA.localeCompare(hogNameB);
			});
		} else if (this.state.sortBy === 'weight') {
			return this.filterHogs().sort((a, b) =>
				a.weight < b.weight ? 1 : -1
			);
		} else {
			return this.filterHogs();
		}
	};

	filterSelection = (filter) => {
		this.setState({filter});
	};

	sortSelection = (sortBy) => {
		this.setState({sortBy});
	};

	componentDidMount() {
		this.setState({hogs});
	}
	render() {
		return (
			<div className="App">
				<Nav filter={this.filterSelection} sort={this.sortSelection} />
				<HogList hogs={this.filterednSortedHogs()} />
			</div>
		);
	}
}

export default App;

import piggy from '../porco.png'
import React from 'react'

const Nav = props => {

	const handleChange = event => {
		props.changeSort(event.target.value)
	}

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div style={{padding: '15px' }}>
				<button onClick={props.toggleFilterGreasedHogs} >{props.filterGreasedHogs ? 'Unfilter Greased Pigs' : 'Filter Greased Pigs'}</button>
			</div>
			<div>
				<label>Sort By: </label>
				<select onChange={handleChange}>
					<option value="none">None</option>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>	
			</div>
			
		</div>
	)
}

export default Nav

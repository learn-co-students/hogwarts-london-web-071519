import piggy from '../porco.png'
import React from 'react'


const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				<label>Show Greased Only</label>
				<input type='checkbox' onClick={props.toggleGreasedHogs} />
			</div>
			<div>
				<label>Sort by</label>
				<select onChange={e => { 
					props.updateSortBy(e)}}>
					<option value="">None</option>
					<option value="weight">Weight</option>
					<option value="name">Name</option>
				</select>
			</div>
		</div>
	)
}

export default Nav

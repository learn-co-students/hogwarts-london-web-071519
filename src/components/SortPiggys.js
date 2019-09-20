import React from 'react'

const SortPiggys = (props) => {
    return <div>
        <label>Sort By:</label>
    <select onChange={(e) => props.sortPigs(e)} style={{"margin": "10px", "padding:": "10px"}}>
        <option value="">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
    </select>
    </div>
}

export default SortPiggys
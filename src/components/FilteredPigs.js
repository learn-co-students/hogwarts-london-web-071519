import React from 'react'

const FilteredPigs = (props) => {
    return<div style={{ padding: '10px 0' }}>
        <label>Show Greased Only:</label>
        <input onChange={(e) => props.filterPigs()} type="checkbox"/>
    </div>
}

export default FilteredPigs
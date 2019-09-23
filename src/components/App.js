import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogData from '../porkers_data';
import HogsList from './HogsList'

const sortByName = (a, b) => a.name.localeCompare(b.name)

class App extends Component {

  state = {
    hogs: hogData,
    showGreasedOnly: false,
    sortBy: ""
  }

  toggleGreasedHogs = () => {
    this.setState({ showGreasedOnly: !this.state.showGreasedOnly })
  }

  greasedHogs = (hogs) => {
   return this.state.showGreasedOnly ? hogs.filter(hog => hog.greased === true) : hogs  
  }

  updateSortBy = (e) => {
    this.setState({ sortBy: e.target.value })
  }

  sortByName = hogs => [...hogs].sort(sortByName)

  updatedHogs = (hogs) => {
    
    switch(this.state.sortBy) {
      case "": {
        let newArray = hogs
        console.log(newArray)
        return newArray
      }
      case 'weight': { 
        let newArray = [...hogs]
        newArray.sort(function(a, b){return a.weight-b.weight})
        console.log(newArray)
        return newArray
      }
      case 'name': return this.sortByName(hogs)
    }
  }

  filteredAndSortedHogs = (hogs) => {
     return this.updatedHogs(this.greasedHogs(hogs))
  }

  render() {

    return(

      <div className="App">
        < Nav toggleGreasedHogs={this.toggleGreasedHogs} updateSortBy={this.updateSortBy} />
        < HogsList id='hogs-list' hogs={this.filteredAndSortedHogs(hogData)} />
      </div>
    )
  }
}

export default App;

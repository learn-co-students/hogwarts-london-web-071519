import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigsContainer from './PigsContainer'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs: hogs,
    filterGreasedHogs: false,
    sortHogsBy: 'none'
  }

  changeSort = sortValue => {
    if (sortValue === 'weight') {
      this.setState({sortHogsBy: 'weight'})
    } else if (sortValue === 'name') {
      this.setState({sortHogsBy: 'name'})
    } else {
        this.setState({sortHogsBy: 'none'})
    }
  }

  sortByName = (a, b) => {
    const hog1 = a.name.toUpperCase()
    const hog2 = b.name.toUpperCase()
    if (hog1 < hog2) {
      return -1;
    }
    if (hog1 > hog2) {
      return 1;
    }
    return 0;
  }

  sortByWeight = (a, b) => a.weight - b.weight

  toggleFilterGreasedHogs = () => {
    this.setState({filterGreasedHogs: !this.state.filterGreasedHogs})
  }

  displayFilteredHogs = () => {
    const hogs = this.state.filterGreasedHogs ? this.state.hogs.filter(hog => hog.greased) : this.state.hogs 
    if (this.state.sortHogsBy === 'name') {
        let nameSorted = JSON.parse(JSON.stringify(hogs))
        return nameSorted.sort((a,b) => this.sortByName(a,b))
    } else if (this.state.sortHogsBy === 'weight') {
        let weightSorted = JSON.parse(JSON.stringify(hogs))
        return weightSorted.sort((a,b) => this.sortByWeight(a,b))
    } else if (this.state.sortHogsBy === 'none') {
      return hogs
    }
  }

  render() {
    return (
      <div className="App">
          < Nav toggleFilterGreasedHogs={this.toggleFilterGreasedHogs} filterGreasedHogs={this.state.filterGreasedHogs} changeSort={this.changeSort}/>
          < PigsContainer hogs={this.displayFilteredHogs()}/>
      </div>
    )
  }
}

export default App;

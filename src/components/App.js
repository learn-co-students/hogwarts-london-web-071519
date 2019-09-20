import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogData from '../porkers_data'
import Pigs from './Pigs'
import FilteredPigs from './FilteredPigs'
import SortPiggys from './SortPiggys'

class App extends Component {

  state = {
    hogs: hogData,
    showGreased: false,
    sortBy:''
  }

  showPigs = () => {
    return this.state.showGreased ? this.state.hogs.filter(pig => pig.greased) : this.state.hogs
  }

  filterPigs = () => {
    this.setState({ showGreased: !this.state.showGreased })
    this.showPigs()
  }

  sortPigs = (event) => {
    this.setState({ sortBy: event.target.value })
    this.getSortedPiggys()
  }

  sortByWeight = pigs => [...pigs].sort((pigA, pigB) => pigA.weight - pigB.weight)


  sortByName = pigs => [...pigs].sort((pigA, pigB) => pigA.name.localeCompare(pigB.name))

  getSortedPiggys = () => {
    const pigs = this.showPigs()
    switch (this.state.sortBy) {
      case 'weight':
        return this.sortByWeight(pigs)
      case 'name':
        return this.sortByName(pigs)
      default:
        return pigs
    }
  }

  render() {
    const hogs = this.getSortedPiggys()
    return (
      <div className="App">
          < Nav />
          <FilteredPigs filterPigs={this.filterPigs} />
          <SortPiggys sortPigs={this.sortPigs}/>
          <Pigs pigs={hogs} />
      </div>
    )
  }
}

export default App;

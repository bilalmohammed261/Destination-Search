// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    // console.log(destinationsList)

    const {searchInput} = this.state
    console.log(searchInput)

    const searchedDestinationsList = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput),
    )
    console.log(searchedDestinationsList)

    return (
      <div className="bg-container">
        <h1 className="title">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="search"
            onChange={this.onChangeInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>

        <ul className="list-container">
          {searchedDestinationsList.map(destination => (
            <DestinationItem
              name={destination.name}
              imgUrl={destination.imgUrl}
              key={destination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

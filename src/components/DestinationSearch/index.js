// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props

    console.log(destinationsList)

    return (
      <div className="bg-container">
        <h1 className="title">Destination Search</h1>
        <div className="search-container">
          <input type="search" placeholder="search" />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search"
          />
        </div>

        <ul className="list-container">
          {destinationsList.map(destination => (
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

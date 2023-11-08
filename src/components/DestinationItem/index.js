// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl, key} = props
  console.log(key)

  return (
    <li>
      <img className="img" src={imgUrl} alt={name} />

      <p className="place">{name}</p>
    </li>
  )
}

export default DestinationItem

/* eslint-disable react/button-has-type */
// Write your code here.
import './index.css'

const Banners = props => {
  const {bannerCards} = props
  const {id, headerText, description, className} = bannerCards
  return (
    <li key={id} className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button className="btn">Show More</button>
    </li>
  )
}

export default Banners

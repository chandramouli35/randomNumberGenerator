// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState({
      random: randomNumber,
    })
  }

  render() {
    const {random} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onIncrement} className="button">
            Generate
          </button>
          <p className="number">{random}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

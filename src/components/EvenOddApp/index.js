// Write your code here

import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0, type: 'Even'}

  increment = () => {
    const {count, type} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    const nowCount = parseInt(count) + parseInt(randomNumber)
    let evenOrOdd = type
    if (nowCount % 2 === 0) {
      evenOrOdd = 'Even'
    } else {
      evenOrOdd = 'Odd'
    }
    this.setState({count: nowCount, type: evenOrOdd})
  }

  render() {
    const {count, type} = this.state

    return (
      <div className="page_container">
        <div className="sub_container">
          <h1 className="heading">Count {count}</h1>
          <p>Count is {type}</p>
          <button onClick={this.increment} type="button">
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

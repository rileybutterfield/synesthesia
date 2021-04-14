
import React from "react"
import {connect} from 'react-redux'
import {getNewColor} from "../store/colors"

class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      color: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({color: e.target.value})
  }

  handleSubmit(e) {
    console.log("handleSubmit", this.state.color)
    e.preventDefault()
    this.props.getNewColor(this.state.color)
  }

  render() {
    return (
      <form>
        <input
        placeholder="Enter any word here..."
        value={this.state.color}
        type="text"
        onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleSubmit}>View color</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getNewColor: color => {
    console.log("mapDispatch")
    dispatch(getNewColor(color))
  }
})


export default connect(null, mapDispatchToProps)(Input)


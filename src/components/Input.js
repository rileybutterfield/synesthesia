
import React from "react"

class Input extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <form>
        <input placeholder="Enter any word here" />
        <button type="submit">View color</button>
      </form>
    )
  }
}


export default Input

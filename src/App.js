import paint from './paint.svg';
import './App.css';
import TextBar from "./components/TextBar"
import Input from "./components/Input"
import React from "react"
import {connect} from 'react-redux'
// import {getNewColor} from "../store/colors"

class App extends React.Component {
  render() {
    console.log("PROPS", this.props)
    return (
    <div className="App">
      <header className="App-header" style={{background:this.props.color}}>
        <img src={paint} className="App-logo" alt="logo" />
        <TextBar />
        <Input />
      </header>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  color: state.colors.currentColor,
})



export default connect(mapStateToProps)(App)

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header" style={{background:"darkslategrey"}}>
//         <img src={paint} className="App-logo" alt="logo" />
//         <TextBar />
//         <Input />
//       </header>
//     </div>
//   );
// }

// export default App;

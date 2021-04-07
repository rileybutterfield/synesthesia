import paint from './paint.svg';
import './App.css';
import TextBar from "./components/TextBar"
import Input from "./components/Input"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={paint} className="App-logo" alt="logo" />
        <TextBar />
        <Input />
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity= "Roccavivi"/>
    </div>
<div className="Open"><a  href="https://github.com/Marta919" target="_blank" rel="noreferrer">Coded by Marta D'Orazio</a>
  </div>
</div>
  );
}

export default App;

import FetchApi from "./components/FetchApi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Astronomy Picture of the Day</h1>
        <h4>Source / NASA API /</h4>
      </header>
      <FetchApi />
    </div>
  );
}

export default App;

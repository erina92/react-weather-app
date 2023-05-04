import "./App.css";
import WeatherSearch from "./WeatherSearch";
import DarkMode from "./DarkMode";
function App() {
  return (
    <div className="App">
      <DarkMode />
      <h1>Weather App ⛅</h1>
      <WeatherSearch />
      <footer>
        <p>
          Created by{" "}
          <a href="https://github.com/erina92" target="_blank" rel="noreferrer">
            Erika Miglietta
          </a>
        </p>
        <p>
          This is an open-source website, created with <strong>React</strong>{" "}
          🦄.
        </p>
      </footer>
    </div>
  );
}

export default App;

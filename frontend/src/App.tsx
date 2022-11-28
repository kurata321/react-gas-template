import './App.css';
import Button from "./Button";

function App() {
  if (typeof google !== 'undefined') {
    google.script.run
      .withSuccessHandler((result: string) => {
        alert(result);
      })
      .withFailureHandler(() => {
        alert('error at withFailureHandler');
      })
      .hello();
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button/>
      </header>
    </div>
  );
}

export default App;

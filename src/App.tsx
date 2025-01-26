import "./App.css";

function padTime(minsOrSecs: number) {
  return minsOrSecs < 10 ? `0${minsOrSecs}` : minsOrSecs;
}

function App() {
  return (
    <div className="App">
      <h1>
        {padTime(0)}:{padTime(0)}
      </h1>
      <button>min</button>
      <button>sec</button>
      <button>reset</button>
      <button>start</button>
      <button>pause</button>
    </div>
  );
}

export default App;

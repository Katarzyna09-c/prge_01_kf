import "./App.css";
import Home from "./components/home/Home";

function App() {
  const imie = "WORLD";

  return (
    <div className="App">
      <Home text={imie} />
    </div>
  );
}

export default App;

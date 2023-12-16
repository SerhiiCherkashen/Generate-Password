import logo from "./logo.svg";
import "./App.css";
import PasswordGenerator from "./passwordGenerator/pGenerator";
const App = () => {
  return (
    <div className="App">
      <h1>--- Password Generator ---</h1>
      <div className="component">
        <PasswordGenerator />
      </div>
    </div>
  );
};

export default App;
// App.js

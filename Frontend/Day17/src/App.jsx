import "./App.css";

import Calorie from "./Calorie";
function App() {
  return (
    <div className="App">
      <div className="instructions">
      <h1>Instructions</h1>
      <ul>
        <li>This is Your Personal Calories Cal</li>
        <li>Use it and calc your calorie intake</li>
        <li>This is Your Personal Calories Cal</li>
      </ul>
      </div>

      <Calorie/>
    </div>
  );
}

export default App;

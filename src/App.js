import React from "react";
import "./App.css";
import Snowman from "./Snowman";

function App() {
  return (
    <div className="App">
      <Snowman />
    </div>
  );
}

export default App;


//TODO: Winning/Losing messages + end game feature (still guess after "won")
// We need to have a different word/changing word (not apple)
// array of pictures; stop incrementing once snowman melts
// Add number of wrong guesses
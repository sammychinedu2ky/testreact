import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let myState = [
    {
      question: "Are you a Graduate or a Student?",
      options: ["Graduate", "Student"],
      selected: "",
    },
    {
      question: "What level are you currently in ?",
      options: [100, 200, 300, 400, 500],
      selected: "",
    },
  ];
  const [state, setState] = useState(myState);
  const [count, setCount] = useState(0);
  const [congratulate, setCongratulate] = useState(false);
  const handleFormSelection = (value, index) => {
    let newState = [...state];
    newState[index].selected = value;
    setState(newState);
  };
  const handleNext = () => {
    if (count < state.length - 1 && state[count].selected !== "") {
      setCount(count + 1);
    } else if (count < state.length - 1 && state[count].selected === "") {
      alert("Please select an option");
    } else {
      setCongratulate(true);
    }
  };
  const handlePrev = () => {
    if (count > 0) {
      setCount(count - 1);
      setCongratulate(false);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="closure">
          <h1> Learning Hooks in react</h1>
          <p> rendering different forms based on users input.</p>
          {!congratulate ? (
            <>
              <p>{state[count].question}</p>

              {state[count].options.map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    checked={state[count].selected === value}
                    onClick={() => handleFormSelection(value, count)}
                  />{" "}
                  {value}
                  <br />
                </label>
              ))}
            </>
          ) : (
            <p>Congratulations, you're almost done</p>
          )}

          <div>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

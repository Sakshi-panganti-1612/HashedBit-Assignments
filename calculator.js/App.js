import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => setResult(Number(num1) + Number(num2));
  const subtract = () => setResult(Number(num1) - Number(num2));
  const multiply = () => setResult(Number(num1) * Number(num2));
  const divide = () => setResult(Number(num1) / Number(num2));

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>React Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
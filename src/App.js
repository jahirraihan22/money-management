import React, { useState } from "react";
import "./App.css";

// components
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [];

function App() {
  const [items, setItems] = useState(DUMMY_DATA);
  const addExpenseHandler = (item) => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={items} />
    </div>
  );
}

export default App;

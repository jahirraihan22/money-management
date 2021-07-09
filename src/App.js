import "./App.css";

// components
import Expenses from "./components/Expenses/Expenses";

function App() {
  const items = [
    {
      id: "e1",
      title: "Buy Pizza",
      amount: 120.65,
      date: new Date(2021, 7, 8),
    },
    {
      id: "e2",
      title: "Buy Pencil",
      amount: 1210.65,
      date: new Date(2021, 7, 8),
    },
    {
      id: "e3",
      title: "Vist Cox's bazar",
      amount: 12021.65,
      date: new Date(2021, 7, 8),
    },
    {
      id: "e4",
      title: "Buy Phone",
      amount: 11220.65,
      date: new Date(2021, 7, 8),
    },
  ];
  return (
    <div className="App">
      <h1>Hello React</h1>
      <hr />
      <Expenses items={items} />
    </div>
  );
}

export default App;

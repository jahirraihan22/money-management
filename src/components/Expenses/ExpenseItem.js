import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../../css/ExpenseItem.css";
function ExpenseItem(props) {
  let title = props.title;
  const clickHnadler = () => {
    title = "updated";
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHnadler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;

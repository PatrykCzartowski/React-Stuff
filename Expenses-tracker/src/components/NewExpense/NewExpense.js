import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';

function NewExpense(props) {
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsClicked('false');
  };

  const [isClicked, setIsClicked] = useState('false');

  const isClickedHandler = () => {
    setIsClicked('true');
  }

  if(isClicked === 'false') {
    return (
    <div className="new-expense">
    <button onClick={isClickedHandler}>Add New Expense</button>
    </div>);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} isClicked={isClicked}/>
    </div>
  );
}
export default NewExpense;

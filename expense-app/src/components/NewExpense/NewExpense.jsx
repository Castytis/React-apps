import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [isClicked, setIsClicked] = useState(false);
  const addNewExpenseHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="new-expense">
      {isClicked ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelExpense={addNewExpenseHandler}
        />
      ) : (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;

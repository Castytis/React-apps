import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const expenses = props.expenses;

  const [filteredYear, setFilteredYear] = useState("2022");

  const yearSelectedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={yearSelectedHandler}
        />
        {expenses.filter((expense) => {
           return (expense.date).getFullYear().toString() === filteredYear
        }).map((expense) => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />;
        })}
        
      </Card>
    </div>
  );
}

export default Expenses;

import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const expenses = props.expenses;

  const [filteredYear, setFilteredYear] = useState("2022");

  const yearSelectedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={yearSelectedHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList 
          expenses={filterExpenses}
        />
      </Card>
    </li>
  );
}

export default Expenses;

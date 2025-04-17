import React from 'react'

function ExpenseTable({ expenses, onDeleteExpense }) {
    if (expenses.length === 0) {
      return <p>No expenses to display.</p>;//for the default view
    }
  
    return (
      <table className="expense-table">
        <thead>
          <tr>
            <th>Name</th>
            <th><button>Description</button></th>
            <th><button>Category</button></th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>KSH{expense.amount}</td>
              <td>{expense.date}</td>
              <td>
              <button
                className="delete-btn"
                onClick={() => onDeleteExpense(expense.id)}
              >
                Delete
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  
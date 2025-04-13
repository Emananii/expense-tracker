import { useState } from 'react'
import './App.css'
import Form from './Components/Form.jsx'
import Header from './Components/Header.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Home from './Components/Home.jsx'
import SearchBar from './Components/SearchBar.jsx'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function handleSearchChange(term) {
    setSearchTerm(term);
  }
  // Filter expenses by name or description (case-insensitive)
  const filteredExpenses = expenses.filter((expense) => {
    const term = searchTerm.toLowerCase();
    return (
      expense.name.toLowerCase().includes(term) ||
      expense.description.toLowerCase().includes(term)
    );
  });
  // Sort expenses by date (latest first)
  filteredExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
  // Sort expenses by amount (highest first)

  return (
    <div>
      <Header />
      <div className="app-layout">
        <Sidebar>
          <Form onAddExpense={handleAddExpense} />
        </Sidebar>

        <main className="main-content">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <Home expenses={filteredExpenses} />
        </main>
      </div>
    </div>
  );
}

export default App

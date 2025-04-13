import { useState } from 'react'
import './App.css'
import Form from './Components/Form.jsx'
import Header from './Components/Header.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Home from './Components/Home.jsx'
import SearchBar from './Components/SearchBar.jsx'
import SortControls from './Components/SortControls.jsx';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("category"); //sorting by category
  const [sortOrder, setSortOrder] = useState("asc"); //sorting order is ascending


  function handleAddExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  function deleteExpense(id) {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  }

  // Filter expenses by name or description (case-insensitive)
  const filteredExpenses = expenses.filter((expense) => {
  const term = searchTerm.toLowerCase();
    return (
      expense.name.toLowerCase().includes(term) ||
      expense.description.toLowerCase().includes(term)
    );
  });


  function sortExpenses(expenses, sortBy, sortOrder) {
    return [...expenses].sort((a, b) => {
      const aValue = a[sortBy].toLowerCase();
      const bValue = b[sortBy].toLowerCase();
  
      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }
  
  

  function handleSortChange(event) {
    setSortBy(event.target.value); // for choosing between "category" or "description"
  }
  
  function handleSortOrderChange() {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle between ascending/descending
  }
  


  return (
    <div>
      <Header />
      <div className="app-layout">
        <Sidebar>
          <Form onAddExpense={handleAddExpense} />
        </Sidebar>

        <main className="main-content">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <SortControls
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSortChange={handleSortChange}
            onOrderToggle={handleSortOrderChange}
          />
          <Home
            expenses={sortExpenses(filteredExpenses, sortBy, sortOrder)}
            onDeleteExpense={deleteExpense}
          />
        </main>
      </div>
    </div>
  );
}

export default App

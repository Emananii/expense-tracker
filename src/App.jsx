import { useState } from 'react'
import './App.css'
import Form from './Components/Form.jsx'
import Header from './Components/Header.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Home from './Components/Home.jsx'

function App() {
  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  return (
    <div>
      <Header />
      <div className="app-layout">
        <Sidebar>
          <Form onAddExpense={handleAddExpense} />
        </Sidebar>

        <main className="main-content">
          <Home expenses={expenses} />
        </main>
      </div>
    </div>
  );
}

export default App

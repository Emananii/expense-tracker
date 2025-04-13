
import ExpenseTable from "./ExpenseTable";

function Home({ expenses }) {
  return (
    <div className="home">
      <h2>All Expenses</h2>
      <ExpenseTable expenses={expenses} />
    </div>
  );
}

export default Home;

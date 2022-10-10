import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
          <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
            Expense Tracker
          </h1>
        </div>
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

import React from 'react'
import { AddTransaction, Balance, Header, IncomeExpenses, TransactionList } from './components'

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  )
}

export default App

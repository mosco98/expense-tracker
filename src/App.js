import React from 'react'
import { Balance, Header, IncomeExpenses, TransactionList } from './components'

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </div>
  )
}

export default App

import React from 'react'
import { AddTransaction, Balance, Header, IncomeExpenses, TransactionList } from './components'
import { GlobalProvider } from './utils/context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App

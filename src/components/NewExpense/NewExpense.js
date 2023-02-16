import React, {useState} from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [addExpense, setAddExpense]= useState(false)

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    } 
    console.log('function save Expense Data i new expense compo', expenseData)
    props.onAddExpense(expenseData)
    setAddExpense(false)
  }

  const setNewExpese = () => {
    setAddExpense(true)
  }

  const cancel = () =>{
    setAddExpense(false)
  }

    return (
        <div className='new-expense'>
          {!addExpense && <button onClick={setNewExpese}> Yes add New Expense </button>}
          {addExpense && <ExpenseForm onSaveExpenseData={saveExpenseData} cancelNewExpense={cancel}/>}
        </div>
    )
}

export default NewExpense
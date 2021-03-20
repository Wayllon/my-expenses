import React from 'react'
import Rest from './hooks/rest'

const baseURL = 'https://my-expenses-react-app-default-rtdb.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)

const App = () => {
  const data = useGet('transaction/2021-03/expenses')
  const [postData, post] = usePost('transaction/2021-03/expenses')
  const [deleteData, remove] = useDelete()
  
  const newSave = () => {
    post({ description: 'Luz', value: '130.27'})
  }

  const doRemove = () => {
    remove('transaction/2021-03/expenses/-MWC-xhp3obuewL7KGNa')
  }

  return (
    <div>
      { JSON.stringify(data) }
      <button onClick={newSave}>Salvar</button>
      <pre> { JSON.stringify(postData) } </pre>
      <button onClick={doRemove}>Excluir</button>
      <pre> { JSON.stringify(deleteData) } </pre>
    </div>
  )
}

export default App

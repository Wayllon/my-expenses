import React from 'react'
import { useGet } from './hooks/useGet'

const URL = 'https://my-expenses-react-app-default-rtdb.firebaseio.com/transaction/2021-03.json'

const App = () => {
  const data = useGet(URL)

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default App

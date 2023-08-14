import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import Grid from '@mui/material/Grid';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/todolist").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div className="card border-0 shadow " style={{margin: 20}}>
      <Grid sx={{ flexGrow: 1 }} container spacing={4}>
      {(typeof backendData == undefined) ? (
        <p>Loading....</p>
      ): (
        backendData.map((item, i) => (
          <Grid item key={i}><TodoItem item={item}/></Grid>
        ))
    )}
    </Grid>
    </div>
  )
}

export default App
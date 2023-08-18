import React, { useRef, useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import axios from "axios";

const Creattask = () => {
  const [data, setData] = useState({
    task: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const onSubmitTask = (e) => {
      const taskData = {
        task: data.task
      };

      axios.post("/task", taskData)
      .then((response) => {
        console.log(response)
        alert("New Task has been created..")
      })
      .catch((error) => {
        if(error.response){
          console.log(error.response)  
        }else if(error.request) {
          console.log(error.request)
        }else {
          console.log(error)
        }
      })
  }

  return (
    <Box
      component="form"
      onSubmit={onSubmitTask}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Create new Task" variant="outlined" value={data.task} onChange={handleChange}/>
      <Button variant="contained" disableElevation>Create Task</Button>
    </Box>
  )
}

export default Creattask

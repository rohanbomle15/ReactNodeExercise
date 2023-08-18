import React from 'react'
import { Box, TextField, Button } from '@mui/material'

const Creattask = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Create new Task" variant="outlined" />
      <Button variant="contained" disableElevation>Create Task</Button>
    </Box>
  )
}

export default Creattask

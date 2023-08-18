import React from 'react'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Card, Button, Typography } from '@mui/material';

const TodoItem = (props) => {
  return (
    <Card sx={{ minWidth: 100, height: 100 }}>
      <CardContent>
        <Typography variant="outlined" component="div">
          {props.item.task}
        </Typography>
        <CardActions>
            <Button size="small">Mark done</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default TodoItem

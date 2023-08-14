import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TodoItem = (props) => {
  return (
    <Card sx={{ minWidth: 100, height: 100 }}>
      <CardContent>
        <Typography variant="outlined" component="div">
          {props.item.title}
        </Typography>
        <CardActions>
            <Button size="small">Mark done</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default TodoItem

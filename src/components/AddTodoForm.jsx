import { Button, Container, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { todoActions } from '../store/todo-slice'
import { useState } from 'react'

const AddTodo = () => {
  const [value,setValue] = useState('')

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(value.trim() !== ''){
      dispatch(todoActions.addTodo({
        title:value 
      }))
      setValue('')
    } else {
      alert('Try To Enter Some Text')
    }
  }
  return (
    <>
    <Container fixed style={{marginLeft:"40%",marginTop:"2%"}}>
      <form onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="Add TODO" size='small' variant="outlined" value={value} onChange={(e)=>setValue(e.target.value)}/>
          <Button variant="outlined" type='submit' style={{margin:"0% 0% 0% 1%"}}>Submit</Button>   
      </form> 
      </Container>
    
    </>
  )
}

export default AddTodo
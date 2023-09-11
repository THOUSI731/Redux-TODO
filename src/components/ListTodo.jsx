import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const ListTodo = () => {
  const todos = useSelector(state=>state.todos)
  return (
    <>
    <Grid container>
          <Grid item xs={6} style={{marginLeft:"40%"}}>
          {todos.map(todo=>(
            <TodoItem key={todo.id} id={todo.id} title={todo.title}  completed={todo.completed}/>
          ))}
          </Grid>
     </Grid>       
    
    </>
  )
}

export default ListTodo
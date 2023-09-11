/* eslint-disable react/prop-types */
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, ListItemButton, ListItemIcon, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { todoActions } from '../store/todo-slice';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

const TodoItem = ({id,title,completed}) => {
     const [editing,setEditing] = useState(false)
     const [value,setValue] = useState(title)
     const dispatch = useDispatch() 
     const handleClick =()=>{
          console.log('yufghjvbnhg');
          dispatch(todoActions.todoComplete({id:id,completed:!completed}))
     }
     const handleDelete = () => {
          dispatch(todoActions.deleteTodo({id:id}))
     }
     const handleEdit = () => {
          setEditing(true)
     }
     const handleSave=()=>{
          dispatch(todoActions.editTodo({id:id,title:value}))
          setEditing(false)
     }
  return (
    <>
    <List key={id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItemButton role={undefined} dense>
          <ListItemIcon>
               <Checkbox
               checked={completed}
               onChange={handleClick}
               />
          </ListItemIcon>
          {editing ? <TextField id="outlined-basic" label={title} onChange={(e)=>setValue(e.target.value)} variant="standard"/> : <ListItemText primary={title}  />}
          {!editing ? <IconButton aria-label="edit" onClick={handleEdit} size="large">
               <EditIcon fontSize="inherit" />
          </IconButton> : <IconButton aria-label="editssave" onClick={handleSave} value={value}  size="large">
               <KeyboardTabIcon fontSize="inherit" />
          </IconButton>}
          <IconButton onClick={handleDelete} aria-label="delete" size="large">
               <DeleteIcon fontSize="inherit" color='error' />
          </IconButton>
          </ListItemButton>
     </List>
    </>
  )
}

export default TodoItem
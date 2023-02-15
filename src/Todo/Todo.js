import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useRef, useState } from "react";

const Todo = () => {
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleAddClick = () => {
    setTodoList([...todoList, description]);
    setDescription("");
    inputRef.current.focus()
  };

  const handleDeleteClick = (index) => {
    const todoListCopy = [...todoList]

    todoListCopy.splice(index, 1)
    
    setTodoList(todoListCopy)
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Todo app
      </Typography>
      <Box display="flex" gap="8px">
        <TextField
          placeholder="Description"
          size="small"
          value={description}
          inputRef={inputRef}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddClick}>
          Add
        </Button>
      </Box>
      <Box width="300px">
        <List dense={true}>
          {todoList.map((description, index) => {
            return (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(index)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={description} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </div>
  );
};

export default Todo;

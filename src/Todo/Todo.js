import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useMemo, useRef, useState } from "react";

const Todo = () => {
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddClick = () => {
    setTodoList([
      ...todoList,
      {
        completed: false,
        description,
      },
    ]);
    setDescription("");
    inputRef.current.focus();
  };

  const handleDeleteClick = (index) => {
    const todoListCopy = [...todoList];

    todoListCopy.splice(index, 1);

    setTodoList(todoListCopy);
  };

  const handleCompleteToggle = (index) => {
    const updatedTodoList = todoList.map((todoItem, todoItemIndex) => {
      if (index === todoItemIndex) {
        return {
          ...todoItem,
          completed: !todoItem.completed,
        };
      }

      return todoItem;
    });

    setTodoList(updatedTodoList);
  };

  const filteredTodoList = useMemo(() => {
    console.log("Filter function called");

    if (filter === "completed") {
      return todoList.filter((todoItem) => todoItem.completed === true);
    }

    if (filter === "pending") {
      return todoList.filter((todoItem) => todoItem.completed === false);
    }

    return todoList;
  }, [todoList, filter]);

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
      <Box width="400px">
        <List dense={true}>
          <ListItem>
            <ListItemButton
              role={undefined}
              dense
              disableRipple
            >
              <ListItemIcon sx={{ minWidth: "auto" }}>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": `checkbox-list-label-complete-all` }}
                />
              </ListItemIcon>
              <ListItemText
                id="checkbox-list-label-complete-all"
                primary="Complete all"
              />
            </ListItemButton>
          </ListItem>
          {filteredTodoList.map((todoItem, index) => {
            const labelId = `checkbox-list-label-${index}`;

            return (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteClick(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                {/* <ListItemText primary={description} /> */}
                <ListItemButton
                  role={undefined}
                  onClick={() => handleCompleteToggle(index)}
                  dense
                  disableRipple
                >
                  <ListItemIcon sx={{ minWidth: "auto" }}>
                    <Checkbox
                      edge="start"
                      checked={todoItem.completed}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={
                      todoItem.completed ? (
                        <del>{todoItem.description}</del>
                      ) : (
                        todoItem.description
                      )
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        {todoList.length > 0 && (
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel
                value="pending"
                control={<Radio />}
                label="Pending"
              />
              <FormControlLabel
                value="completed"
                control={<Radio />}
                label="Completed"
              />
            </RadioGroup>
          </FormControl>
        )}
      </Box>
    </div>
  );
};

export default Todo;

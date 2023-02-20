import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import TodoListItem from "./TodoListItem";

const Todo = () => {
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [completeAll, setCompleteAll] = useState(false);

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

  const handleDeleteClick = useCallback((index) => {
    const todoListCopy = [...todoList];

    todoListCopy.splice(index, 1);

    setTodoList(todoListCopy);
  }, [todoList]);

  const handleCompleteToggle = useCallback((index) => {
    const updatedTodoList = todoList.map((todoItem, todoItemIndex) => {
      if (index === todoItemIndex) {
        return {
          description: todoItem.description,
          completed: !todoItem.completed,
        };
      }

      return todoItem;
    });

    setTodoList(updatedTodoList);
  }, [todoList])

  const handleCompleteAllToggle = () => {
    const newValue = !completeAll;

    const updatedTodoList = todoList.map((todoItem) => {
      return {
        description: todoItem.description,
        completed: newValue,
      };
    });

    setTodoList(updatedTodoList);
    setCompleteAll(newValue);
  };

  const filteredTodoList = useMemo(() => {
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
          <Box margin="10px 0 0 20px">
            <input
              id="complete-all"
              type="checkbox"
              checked={completeAll}
              onChange={handleCompleteAllToggle}
            />
            <label htmlFor="complete-all">Complete all</label>
          </Box>
          {filteredTodoList.map((todoItem, index) => {
            return (
              <TodoListItem
                key={index}
                todoItem={todoItem}
                index={index}
                onDeleteClick={handleDeleteClick}
                // onDeleteClick={ref2}
                onCompleteToggle={handleCompleteToggle}
              />
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

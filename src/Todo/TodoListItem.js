import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const TodoListItem = React.memo(({ todoItem, index, onDeleteClick, onCompleteToggle }) => {
  console.log('TodoListItem rendered')
  return (
    <ListItem
      key={index}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDeleteClick(index)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton
        role={undefined}
        onClick={() => onCompleteToggle(index)}
        dense
        disableRipple
      >
        <ListItemIcon sx={{ minWidth: "auto" }}>
          <Checkbox
            edge="start"
            checked={todoItem.completed}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
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
})

export default TodoListItem;

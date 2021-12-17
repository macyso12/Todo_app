import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
import "./Todo.css";
import db from "./firebase";

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy Deadline ⏰" />
      </ListItem>
      <Button
        onCLick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      >
        ❌ DELETE ME
      </Button>
    </List>
  );
}

export default Todo;

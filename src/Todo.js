import React, {useState} from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DB from './firebase';

export default function Todo(props) {
   const toDate = () => {
     let date = new Date();
     const today = date.toDateString();
     return today;
   };
  const toTime = () => {
    let d = new Date();
    const time = d.toTimeString();
    var currentTime = time.slice(0, 9);
    return currentTime;
  }

  return (
    <>
      <List>
        <ListSubheader>Task- </ListSubheader>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            secondary={"Added on: " + toDate() + " " + toTime()}
          />
          <IconButton>
            <DeleteIcon
              onClick={(event) =>
                DB.collection("todo").doc(props.todo.id).delete()
              }
            />
          </IconButton>
        </ListItem>
      </List>
    </>
  );
}
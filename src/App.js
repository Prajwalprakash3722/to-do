import React, { useState, useEffect } from 'react'
import './App.css';
import { Button, FormControl, InputLabel, Input} from "@material-ui/core";
import Todo from "./Todo"
import Footer from "./Footer"
import  DB  from './firebase';
import firebase from 'firebase'

export default function App() {

  const [todos, setTodos] = useState(['']);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    DB.collection('todo').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map((doc) => ({id: doc.id, todo:doc.data().todo })
      ))
    })
    
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    DB.collection('todo').add({
      todo: inputValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>To-Do Web-App</h1>  
      </div>
      <form>
        <FormControl>
          <InputLabel> ✅ Add Your Tasks here...</InputLabel>
          <Input
            value={inputValue}
            className="input-bar"
            onChange={(event) => setInputValue(event.target.value)}
            required
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          value="submit"
          className="input-button"
          onClick={addTodo}
          disabled={!inputValue}
        >
          Add-Task
        </Button>
      </form>
      <ol className="list-group">
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </ol>
      <Footer />
    </div>
  );
}
import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fire when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // will stop the refreshing

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]); // appending new information to the array
    setInput(""); //clear up the input after clicking add todo button
  };

  return (
    <div className="App">
      <h1>Hello World </h1>

      <form>
        <FormControl>
          <InputLabel
            id="filled-basic"
            label="Write a Todo ✅"
            variant="filled"
          >
            {" "}
            Write a Todo ✅{" "}
          </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input} //avoid empty string
        >
          Add Todo
        </Button>
        {/* <button type="submit" onClick={addTodo}>
          Add Todo
        </button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;

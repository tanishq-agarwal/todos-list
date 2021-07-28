import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import React, { useState, useEffect } from 'react';
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from './MyComponents/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos" === null)) { // when localstorage is null store empty array in initTodo but when it has todo item add in initTodo.
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos")); //to get object from localStorage we convert it to object from string
  }


  const onDelete = (todo) => {
    //console.log("I am onDelete of todo", todo);

    //Deleting this way in react does not work ,for that we have to use useState hooks.But in Angular value updation is possible.
    //let index = todos.indexOf(todo);
    //todos.splice(index , 1); deleting one whole object

    //Rather apply this for deletion
    setTodos(todos.filter((e) => { //filter is high order array function
      return e !== todo;
    }));
    localStorage.getItem("todos");
  }

  const addTodo = (title, desc) => {
    //console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1; //indexing starts from 0 so getting that sno. and adding sno. by +1 on adding new todos.
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  /* name of variable is todos
  const [todos,setTodos] = useState([ 
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go the market to get the job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go the mall to get the job done"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go the ghat to get the job done"
    },
  ]);
  */
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); //to store object in locastorage convert in first string
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {  //if only path is written and we search '/about' we get path page because it encounters '/' first and shows us home page so we write exact to match exact paths.
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

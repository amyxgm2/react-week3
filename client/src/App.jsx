// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar.jsx";
import Counter from "../src/pages/Counter.jsx";
import MovieSearch from "../src/pages/Search.jsx";
import TodoList from "../src/pages/TodoList.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/movies" element={<MovieSearch />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;


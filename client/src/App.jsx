import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from '../src/pages/Easy.jsx';
import '../src/App.css'

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/counter" className="nav-link">Counter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Hello!</h1>
      <p>Click on “Counter” in the navigation to try the counter app.</p>
      <p>Click on "Movie Search" in the navigation to try the movie search app.</p>
      <p>Click on "To-Do List" in the navigation to try the to-do list app.</p>
    </div>
  );
}

export default App;

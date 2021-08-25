import React, { Component } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import PostData from "./components/PostsData";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostForm from "./components/PostForm";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" component={HomePage} />

        <PostForm />
      </div>
    </Router>
  );
};

export default App;

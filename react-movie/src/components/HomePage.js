import React from "react";
import PostForm from "./PostForm";

const HomePage = () => {
  return (
    <div>
      <div className="search">
        <input type="text" className="form-control" />
      </div>

      <button className="btn btn-danger btn-addpost">Add Post</button>
    </div>
  );
};

export default HomePage;

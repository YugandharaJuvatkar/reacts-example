import React from "react";

const Post = ({ post }) => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card-group">
          <div
            className="card"
            style={{ width: 200, height: 200, padding: 20 }}
          >
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.description}</p>
              <button className="btn btn-primary">View Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

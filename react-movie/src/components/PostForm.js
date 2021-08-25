// import React from "react";

// const PostForm = () => {
//   return (
//     <div>
//
//     </div>
//   );
// };

// export default PostForm;

import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8080/posts")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.submitHandler} className="form-control">
        <label> Title</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <label> Description</label>
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default PostForm;

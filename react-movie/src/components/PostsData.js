import React, { Component } from "react";
import Post from "./Post";

class PostData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          posts: data,
        });
      });
  }

  render() {
    const { isLoaded, posts } = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className="container">
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </div>
      );
    }
  }
}

export default PostData;

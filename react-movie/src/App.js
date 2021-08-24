import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

class App extends Component {
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
        <div className="App">
          <div className="container">
            <Navbar />
            {posts.map((post) => (
              // <li key={post.id}>
              //   {post.title}||{post.description}
              // </li>
              <Post post={post} />
            ))}
          </div>
        </div>
      );
    }
  }
}
export default App;

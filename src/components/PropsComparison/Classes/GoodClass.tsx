import React from "react";
import { InjectedProps } from "../Container";

interface Props extends InjectedProps {}

export class GoodClass extends React.PureComponent<Props> {
  addPost = () => {
    const { setPosts } = this.props;

    setPosts(prevPosts => {
      const lastPost = prevPosts[prevPosts.length - 1] || 0;

      return [...prevPosts, lastPost + 1];
    });
  };

  render() {
    const { posts } = this.props;

    return (
      <div>
        <h3>Good example</h3>
        <br />
        <button onClick={this.addPost}>Add posts</button>
        <ul>
          {posts.map(post => (
            <li key={post}>{post}</li>
          ))}
        </ul>
      </div>
    );
  }
}

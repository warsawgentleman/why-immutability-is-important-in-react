import React from "react";
import { InjectedProps } from "../Container";

interface Props extends InjectedProps {}

// Indifferent if PureComponent or Component
export class BadClass extends React.PureComponent<Props> {
  addPost = () => {
    const { setPosts } = this.props;

    setPosts(prevPosts => {
      const newPosts = prevPosts;
      const lastPost = newPosts[newPosts.length - 1] || 0;
      newPosts.push(lastPost + 1);

      return newPosts;
    });
  };

  render() {
    const { posts } = this.props;

    return (
      <div>
        <h3>Bad example</h3>
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

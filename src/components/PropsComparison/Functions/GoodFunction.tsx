import React from "react";
import { InjectedProps } from "../Container";

interface Props extends InjectedProps {}

export const GoodFunction: React.FC<Props> = props => {
  const { posts, setPosts } = props;

  const addPost = () => {
    setPosts(prevPosts => {
      const lastPost = prevPosts[prevPosts.length - 1] || 0;
      return [...prevPosts, lastPost + 1];
    });
  };

  return (
    <div>
      <h3>Good example</h3>
      <br />
      <button onClick={addPost}>Add posts</button>
      <ul>
        {posts.map(post => (
          <li key={post}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

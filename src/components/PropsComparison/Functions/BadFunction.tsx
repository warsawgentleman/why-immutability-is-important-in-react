import React from "react";
import { InjectedProps } from "../Container";

interface Props extends InjectedProps {}

export const BadFunction: React.FC<Props> = props => {
  const { posts, setPosts } = props;

  const addPost = () => {
    setPosts(prevPosts => {
      const newPosts = prevPosts;
      const lastPost = newPosts[newPosts.length - 1] || 0;
      newPosts.push(lastPost + 1);
      return newPosts;
    });
  };

  return (
    <div>
      <h3>Bad example</h3>
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

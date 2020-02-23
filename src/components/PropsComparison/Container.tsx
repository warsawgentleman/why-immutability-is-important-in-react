import React, { useState, Dispatch, SetStateAction } from "react";

export interface InjectedProps {
  posts: number[];
  setPosts: Dispatch<SetStateAction<number[]>>;
}

interface Props {
  children: (props: InjectedProps) => JSX.Element;
}

export const PostsContainer: React.FC<Props> = props => {
  const [posts, setPosts] = useState<number[]>([]);
  const { children } = props;

  return children({ posts, setPosts });
};

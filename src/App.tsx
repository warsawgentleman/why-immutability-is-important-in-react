import React from "react";
import { StateComparison, PropsComparison, PostsContainer } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Immutability test app</h1>
      <br />
      <div className="state-container">
        <h2>State comparison</h2>
        <h3>Classes</h3>
        <div className="container">
          <StateComparison.Classes.Good />
          <StateComparison.Classes.Bad />
        </div>

        <h3>Functions</h3>
        <div className="container">
          <StateComparison.Functions.Good />
          <StateComparison.Functions.Bad />
        </div>
      </div>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <div className="props-container">
        <h2>Props comparison</h2>
        <h3>Classes</h3>
        <div className="container">
          <PostsContainer>
            {props => <PropsComparison.Classes.Good {...props} />}
          </PostsContainer>
          <PostsContainer>
            {props => <PropsComparison.Classes.Bad {...props} />}
          </PostsContainer>
        </div>

        <h3>Functions</h3>
        <div className="container">
          <PostsContainer>
            {props => <PropsComparison.Functions.Good {...props} />}
          </PostsContainer>

          <PostsContainer>
            {props => <PropsComparison.Functions.Bad {...props} />}
          </PostsContainer>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

export default App;

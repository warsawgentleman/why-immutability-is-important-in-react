import React from "react";

interface Props {}

interface State {
  items: number[];
  text: string;
}

export class BadClass extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      items: [],
      text: ""
    };
  }

  addItem = () => {
    this.setState(prevState => {
      const newItems = prevState.items;
      const lastItem = newItems[newItems.length - 1] || 0;

      newItems.push(lastItem + 1);

      return { items: newItems };
    });
  };

  render() {
    const { items, text } = this.state;

    return (
      <div>
        <h3>Bad example</h3>
        <br />
        <button onClick={this.addItem}>Add items</button>
        <p>{text}</p>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

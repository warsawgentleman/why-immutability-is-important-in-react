import React from "react";

interface Props {}

interface State {
  items: number[];
}

export class GoodClass extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      items: []
    };
  }

  addItem = () => {
    this.setState(({ items: prevItems }) => {
      const lastItem = prevItems[prevItems.length - 1] || 0;

      return {
        items: [...prevItems, lastItem + 1]
      };
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <h3>Good example</h3>
        <br />
        <button onClick={this.addItem}>Add items</button>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

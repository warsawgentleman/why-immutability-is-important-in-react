import React, { useState } from "react";

interface Props {}

export const BadFunction: React.FC<Props> = () => {
  const [items, setItems] = useState<number[]>([]);

  const addItem = () => {
    setItems(prevItems => {
      const newItems = prevItems;
      const lastItem = newItems[newItems.length - 1] || 0;

      newItems.push(lastItem + 1);
      return newItems;
    });
  };

  return (
    <div>
      <h3>Bad example</h3>
      <br />
      <button onClick={addItem}>Add items</button>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

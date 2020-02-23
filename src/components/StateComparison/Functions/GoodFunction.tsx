import React, { useState } from "react";

interface Props {}

export const GoodFunction: React.FC<Props> = () => {
  const [items, setItems] = useState<number[]>([]);

  const addItem = () => {
    setItems(prevItems => {
      const lastItem = prevItems[prevItems.length - 1] || 0;
      return [...prevItems, lastItem + 1];
    });
  };

  return (
    <div>
      <h3>Good example</h3>
      <br />
      <button onClick={addItem}>Add items</button>
      <ul>
        {items.map(post => (
          <li key={post}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

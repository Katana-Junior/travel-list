import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddItem() {
    if (!newItem.trim()) return;
    setItems([
      ...items,
      {
        id: Date.now(),
        description: newItem,
        quantity: quantity,
        packed: false,
      },
    ]);
    setNewItem("");
    setQuantity(1);
  }

  return (
    <div className="app">
      <Logo />
      <Form
        onAddItem={handleAddItem}
        quantity={quantity}
        setQuantity={setQuantity}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <PackingList items={items} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1 className="header">🌴 Far Away 🧳</h1>;
}
function Form({ onAddItem, quantity, setQuantity, newItem, setNewItem }) {
  function handleSubmit(e) {
    onAddItem();
    e.preventDefault();
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>What do you need for your trip?</h2>
      <select
        className="quantity-select"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="add-btn" onClick={() => handleAddItem()}>
        ADD
      </button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="packing-list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Stats({ items }) {
  return (
    <footer className="stats">
      <em>
        💼You have packed 0 items on your list, and you already packed X(%X)
      </em>
    </footer>
  );
}
function Item({ item }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <span>{item.description}</span>
      <span> {item.quantity}</span>
      <button>❌</button>
    </li>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
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
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
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
      <button className="add-btn" onClick={() => onAddItem()}>
        ADD
      </button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="packing-list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Stats({ items }) {
  const packed = items.filter((item) => item.packed).length;
  const total = items.length;
  const percentage = total > 0 ? Math.round((packed / total) * 100) : 0;
  return (
    <footer className="stats">
      <em>
        💼 You have packed {packed} items on your list, and you already packed{" "}
        {percentage}%
      </em>
    </footer>
  );
}
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <span onClick={() => onToggleItem(item.id)}>{item.description}</span>
      <span> {item.quantity}</span>
      <button className="delete-btn" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}

export default App;

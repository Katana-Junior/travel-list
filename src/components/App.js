import "../App.css";
import { useState } from "react";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Logo from "./Logo";

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

export default App;

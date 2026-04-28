import "./App.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Sunglasses", quantity: 1, packed: true },
];
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList initialItems={initialItems} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1 className="header">🌴 Far Away 🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h2>What do you need for your trip?</h2>
    </div>
  );
}

function PackingList({ initialItems }) {
  return (
    <div className="packing-list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} description={item.description} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        💼You have packed 0 items on your list, and you already packed X(%X)
      </em>
    </footer>
  );
}
function Item() {
  return (
    <li>
      <span>{Item.description}</span>
    </li>
  );
}

export default App;

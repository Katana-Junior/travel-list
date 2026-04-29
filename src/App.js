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
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1 className="header">🌴 Far Away 🧳</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h2>What do you need for your trip?</h2>
      <select className="quantity-select">
        {Array.from({length:20}, (_,i)=>i+1).map(num =>
         ( <option key={num} value={num}>{num}</option>))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>➕ </button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="packing-list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
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

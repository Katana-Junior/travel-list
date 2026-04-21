import "./App.css";

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
    <div className="add-form">
      <h2>What do you need for your trip?</h2>
    </div>
  );
}

function PackingList() {
  return <div className="packing-list">LIST </div>;
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

export default App;

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

export default Form;

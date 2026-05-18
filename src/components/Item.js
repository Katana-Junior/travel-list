function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div className="items">
      <li style={item.packed ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
          className="check-box"
        />
        <span onClick={() => onToggleItem(item.id)}>{item.description}</span>
        <span> {item.quantity}</span>
        <button className="delete-btn" onClick={() => onDeleteItem(item.id)}>
          ❌
        </button>
      </li>
    </div>
  );
}

export default Item;

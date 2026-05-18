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

export default Stats;

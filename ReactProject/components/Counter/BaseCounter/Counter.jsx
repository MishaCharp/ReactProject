export const Counter = ({ value, onIncrease, onDecrease }) => {
  return (
    <div>
      <button onClick={onIncrease}>+</button>
      <input type="text" readOnly value={value} />
      <button onClick={onDecrease}>-</button>
    </div>
  );
};
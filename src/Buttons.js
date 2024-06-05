import { useState } from "react";
export default function Buttons({
  onAddItem,
  onClear,
  onNegative,
  onEqual,
  onPercentage,
}) {
  return (
    <div className="container">
      <div className="row-1">
        <button className="btn" onClick={onClear}>
          AC
        </button>
        <button className="btn" onClick={onNegative}>
          +/-
        </button>
        <button className="btn" value="%" onClick={onPercentage}>
          %
        </button>
        <button
          className="btn last"
          value="/"
          onClick={(e) => onAddItem(e.target.value)}
        >
          &divide;
        </button>
      </div>

      <div className="row-2">
        <button
          className="btn"
          value={7}
          onClick={(e) => onAddItem(e.target.value)}
        >
          7
        </button>

        <button
          className="btn"
          value={8}
          onClick={(e) => onAddItem(e.target.value)}
        >
          8
        </button>

        <button
          className="btn"
          value={9}
          onClick={(e) => onAddItem(e.target.value)}
        >
          9
        </button>
        <button
          className="btn last"
          value="*"
          onClick={(e) => onAddItem(e.target.value)}
        >
          &times;
        </button>
      </div>

      <div className="row-3">
        <button
          className="btn"
          value={4}
          onClick={(e) => onAddItem(e.target.value)}
        >
          4
        </button>
        <button
          className="btn"
          value={5}
          onClick={(e) => onAddItem(e.target.value)}
        >
          5
        </button>
        <button
          className="btn"
          value={6}
          onClick={(e) => onAddItem(e.target.value)}
        >
          6
        </button>
        <button
          className="btn last"
          value="-"
          onClick={(e) => onAddItem(e.target.value)}
        >
          -
        </button>
      </div>

      <div className="row-4">
        <button
          className="btn"
          value={1}
          onClick={(e) => onAddItem(e.target.value)}
        >
          1
        </button>
        <button
          className="btn"
          value={2}
          onClick={(e) => onAddItem(e.target.value)}
        >
          2
        </button>
        <button
          className="btn"
          value={3}
          onClick={(e) => onAddItem(e.target.value)}
        >
          3
        </button>
        <button
          className="btn last"
          value="+"
          onClick={(e) => onAddItem(e.target.value)}
        >
          +
        </button>
      </div>

      <div className="row-5">
        <button
          className="btn"
          value={0}
          onClick={(e) => onAddItem(e.target.value)}
        >
          0
        </button>
        <button
          className="btn"
          value={"."}
          onClick={(e) => onAddItem(e.target.value)}
        >
          .
        </button>
        <button className="btn last" onClick={onEqual}>
          =
        </button>
      </div>
    </div>
  );
}

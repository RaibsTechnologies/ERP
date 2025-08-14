// Toolbar.js
import React from "react";
import "../Product.css"; // Assuming you have a common CSS file for product styles

const Toolbar = ({ onFormat }) => {
  return (
    <div className="toolbar">
      <button onClick={() => onFormat("bold")} title="Bold">
        <strong>B</strong>
      </button>
      <button onClick={() => onFormat("italic")} title="Italic">
        <em>I</em>
      </button>
      <button onClick={() => onFormat("underline")} title="Underline">
        <u>U</u>
      </button>
      <button onClick={() => onFormat("heading")} title="Heading">
        H
      </button>
      <button onClick={() => onFormat("list-ul")} title="Bullet List">
        • List
      </button>
      <button onClick={() => onFormat("list-ol")} title="Numbered List">
        1. List
      </button>
      <button onClick={() => onFormat("link")} title="Insert Link">
        🔗
      </button>
      <button onClick={() => onFormat("image")} title="Insert Image">
        🖼️
      </button>
      <button onClick={() => onFormat("code")} title="Code Block">
        &lt;/&gt;
      </button>
    </div>
  );
};

export default Toolbar;
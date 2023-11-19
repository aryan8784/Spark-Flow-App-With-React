import React from "react";
import "./Tag.css";
import "./TaskForm.css";

const Tag = ({ TagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { background: "#fda821" },
    CSS: { background: "#15d4c8" },
    JavaScript: { background: "#ffd12c" },
    React: { background: "#4cdafc" },
    default: { background: "#f9f9f9" },
  };
  return (
    <>
      <button
        className="tag"
        style={selected ? tagStyle[TagName] : tagStyle.default}
        type="button"
        onClick={() => selectTag(TagName)}
      >
        {TagName}
      </button>
    </>
  );
};

export default Tag;

import React, { useState } from "react";
import "./search.css";

const Search = ({ type, placeholder, min, changeHandle }) => {
  return (
    <div className="search-container">
      <h2>Generate Paragraph</h2>
      <input
        type={type}
        placeholder={placeholder}
        min={min}
        onChange={changeHandle}
      />
    </div>
  );
};

export default Search;

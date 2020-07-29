import React from "react";

function SearchBar(props) {
  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      <input
        className="search__input"
        type="text"
        onChange={props.handleChange}
        placeholder="Search tasks here"
      />
    </form>
  );
}

export default SearchBar;

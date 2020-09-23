import React, { useState } from "react";

import PropTypes from "prop-types";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value); //this works with multiple fields
  // this.setState({ text: e.target.value }); this works with a single field

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text" //e.target.name refers to this name
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        {/* <input
            type="email"
            name="email" //e.target.name refers to this name
            placeholder="Search email..."
            value={this.state.email}
            onChange={this.onChange}
          /> */}
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear Results
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;

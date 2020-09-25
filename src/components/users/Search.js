import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value); //this works with multiple fields
  // this.setState({ text: e.target.value }); this works with a single field

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear Results
        </button>
      )}
    </div>
  );
};

export default Search;

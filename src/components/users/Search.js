import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
    // email: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value }); //this works with multiple fields
  // this.setState({ text: e.target.value }); this works with a single field

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text" //e.target.name refers to this name
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
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
      </div>
    );
  }
}

export default Search;
import React, { Component } from "react";

import "./SearchPanel.css";

export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  onTermChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onToggleTerm(term);
  };

  render() {
    return (
      <input
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onTermChange}
        value={this.state.term}
      />
    );
  }
}

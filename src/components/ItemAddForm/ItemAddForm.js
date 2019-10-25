import React, { Component } from "react";

import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onlabelChange = e => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="itemaddform d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onlabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}

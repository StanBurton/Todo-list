import React, { Component } from "react";

import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends Component {

  classNameChoose(filter, newFilter) {
    if (filter === newFilter) {
      return "btn btn-info";
    }
    return "btn btn-outline-secondary";
  }

  render() {
    const { onToggleView, filter } = this.props;

    return (
      <div className="btn-group">
        <button
          type="button"
          className={this.classNameChoose(filter, 'all')}
          onClick={() => onToggleView("all")}
        >
          All
        </button>
        <button
          type="button"
          className={this.classNameChoose(filter, 'active')}
          onClick={() => onToggleView("active")}
        >
          Active
        </button>
        <button
          type="button"
          className={this.classNameChoose(filter, 'done')}
          onClick={() => onToggleView("done")}
        >
          Done
        </button>
      </div>
    );
  }
}

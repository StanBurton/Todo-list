import React, { Component } from "react";

import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends Component {

  classNameChoose(listView, newView) {
    if (listView === newView) {
      return "btn btn-info";
    }
    return "btn btn-outline-secondary";
  }

  render() {
    const { onToggleView, listView } = this.props;

    return (
      <div className="btn-group">
        <button
          type="button"
          className={this.classNameChoose(listView, 'all')}
          onClick={() => onToggleView("all")}
        >
          All
        </button>
        <button
          type="button"
          className={this.classNameChoose(listView, 'active')}
          onClick={() => onToggleView("active")}
        >
          Active
        </button>
        <button
          type="button"
          className={this.classNameChoose(listView, 'done')}
          onClick={() => onToggleView("done")}
        >
          Done
        </button>
      </div>
    );
  }
}

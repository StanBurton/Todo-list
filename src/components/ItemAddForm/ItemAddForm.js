import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {
    render() {
        const { onAddItem } = this.props;

        const text = 'privet';

        return (
            <div className="itemaddform">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => onAddItem(text)}>
                    Add Item
                </button>
            </div>
        )
    }
}
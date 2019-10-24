import React, { Component } from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {

    onLabelClick = () => {
        console.log(`${this.props.label}`)
    }

    render() {

        const { label, important = false } = this.props;

        const spanStyle = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (<span className="todolistitem">
            <span
                className='todolistitemlabel'
                style={spanStyle}
                onClick={this.onLabelClick}>
                {label}
            </span>

            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>

            <button type="button" className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
        </span>);

    };
};

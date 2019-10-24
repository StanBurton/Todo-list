import React, { Component } from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {

    state = {  /// Class field syntaxxx(ES7
        done: false,
        important: false
    }

    onLabelClick = () => { /// Class field syntaxxx(ES7
        this.setState(({ done }) => { ///arguments has function because we update state which depends of previous state
            return {
                done: !done
            }
        })
    }

    onMarkImportant = () => {
        this.setState(({ important }) => { ///arguments has function because we update state which depends of previous state
            return {
                important: !important
            }
        })
    }

    render() {

        const { label, onDeleted } = this.props;

        const { done, important } = this.state;

        let classNames = 'todolistitem';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        return (<span className={classNames}>
            <span
                className='todolistitemlabel'
                onClick={this.onLabelClick}>
                {label}
            </span>

            <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}>
                <i className="fa fa-exclamation" />
            </button>

            <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
                <i className="fa fa-trash-o" />
            </button>
        </span>);

    };
};

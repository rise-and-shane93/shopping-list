import React, { Component } from 'react';

import { connect } from "react-redux";
import { authActions, addItem } from '../redux/actions/authActions';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    render() {
        const {name, index} = this.props;
        return (
            <div className="category-header">
                <h2>{name}</h2>
                <button><strong>&#8942;</strong></button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        message: state.auth.message,
        categories: state.auth.categories
    }
}

export default connect(
    mapStateToProps,
    {
        authActions,
        addItem
    }
)(Category);
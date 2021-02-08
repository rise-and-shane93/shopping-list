import React, { Component } from 'react';

import { connect } from "react-redux";
import { authActions, addCategory } from '../redux/actions/authActions';

class Category extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {name, categories} = this.props;

        return(
            <h2>{name}</h2>
        );
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
        addCategory
    }
)(Category);
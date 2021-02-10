import React, { Component } from 'react';

import { connect } from "react-redux";
import { authActions, addItem } from '../redux/actions/authActions';

class Item extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {name, index, catName} = this.props;
        return(
            <div className="list-item">
                <p>{name}</p>
                <button><i class="fa fa-pencil" aria-hidden="true" aria-label="edit"></i></button>
                <button aria-label="delete">&times;</button>
            </div>
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
        addItem
    }
)(Item);
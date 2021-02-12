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
                <p>{name}&nbsp;</p>
                <button class="list-item-button"><i class="fa fa-pencil" aria-hidden="true" aria-label="edit"></i></button>
                <button class="list-item-button" aria-label="delete"><strong>&times;</strong></button>
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
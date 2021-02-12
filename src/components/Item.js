import React, { Component } from 'react';

import { connect } from "react-redux";
import { authActions, addItem, removeItem } from '../redux/actions/authActions';

class Item extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {name, index, catName, removeItem} = this.props;
        return(
            <div className="list-item">
                <p>{name}&nbsp;</p>
                <button className="list-item-button"><i className="fa fa-pencil" aria-hidden="true" aria-label="edit"></i></button>
                <button className="list-item-button" aria-label="delete" onClick={() => removeItem(catName, name)}><strong>&times;</strong></button>
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
        addItem,
        removeItem
    }
)(Item);
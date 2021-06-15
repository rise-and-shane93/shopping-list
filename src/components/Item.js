import React, { Component } from 'react';

import { connect } from "react-redux";
import { authActions, addItem, removeItem, editItem } from '../redux/actions/authActions';

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            value: ""
        }
    }

    componentDidMount() {
        this.setState({value: this.props.name});
    }

    editItem = () => {
        this.setState({isEdit: true});
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleEditSubmit = (event) => {
        event.preventDefault();
        this.props.editItem(this.props.catName, this.state.value, this.props.index);
        this.setState({isEdit: false});
        // this.setState({value: ''});
    }

    render() {
        const {name, index, catName, removeItem} = this.props;
        // const itemRender = () => {
        //     return <div className="list-item">
        //     <p>{name}&nbsp;</p>
        //     <button className="list-item-button"><i className="fa fa-pencil" aria-hidden="true" aria-label="edit" onClick={() => this.editItem()}></i></button>
        //     <button className="list-item-button" aria-label="delete" onClick={() => removeItem(catName, name)}><strong>&times;</strong></button>
        // </div>;
        // }
        return(
            <>
                <div className="list-item" className={this.state.isEdit ? "display-none" : "display-block"}>
                    <p>{this.state.value}&nbsp;</p>
                    <button className="list-item-button"><i className="fa fa-pencil" aria-hidden="true" aria-label="edit" onClick={() => this.editItem()}></i></button>
                    <button className="list-item-button" aria-label="delete" onClick={() => removeItem(catName, name)}><strong>&times;</strong></button>
                </div>
                <form onSubmit={this.handleEditSubmit} className={this.state.isEdit ? "display-block" : "display-none"}>
                    <input type="text" placeholder="Item" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Edit Item" />
                </form>
            </>
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
        removeItem,
        editItem
    }
)(Item);
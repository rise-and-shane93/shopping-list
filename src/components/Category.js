import React, { Component } from 'react';

import Item from "./Item";

import { connect } from "react-redux";
import { authActions, addItem } from '../redux/actions/authActions';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    // componentDidMount() {
    //     console.log(this.props.categories[this.props.key]);
    // }

    // componentDidUpdate() {
    //     console.log(this.props.categories[this.props.key]);
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.props.name, this.state.value);
        this.setState({value: ''});
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {

        const {name, index, categories} = this.props;
        const theItems = categories[index].items.map((el, i) => {
            return <Item key={i} name={el} index={i} catName={name} />
        });

        return(
            <>
            <h2>{name}</h2>
            {theItems}
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Item" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Add Item" />
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
        addItem
    }
)(Category);
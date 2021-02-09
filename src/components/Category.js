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
        // const theItems = () => {
        //     if (categories[key].items) {
        //         console.log("there are items");
        //         return categories[key].items.map((el, i) => {
        //             return <p key={i}>{el}</p>
        //         });
        //     } else {
        //         console.log("no items");
        //     }
        // }
        // const theItems = categories[index].items.map((el, i) => {
        //     return <p key={i}>{el}</p>
        // });

        return(
            <>
            <h2>{name}</h2>
            {/* {theItems} */}
            {(() => {
                console.log(categories[index].items);
            })()}
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
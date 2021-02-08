import React, { Component } from 'react';

import { connect } from "react-redux";
import { authActions, addCategory } from '../redux/actions/authActions';

import Category from './Category';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            listCategories: []
        };
    }

    componentDidMount() {
        this.props.authActions();
        // console.log(this.props.message);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props.categories);
        return null;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addCategory(this.state.value);
        this.setState({value: ''});
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    renderCategories = () => {
        console.log(this.props.categories);
        return this.props.categories.map((el, i) => <p key={i}>{el}</p>)
    }

    render() {

        const { categories } = this.props;
        const theCategories = categories.map((el, i) => {
            return <Category key={i} name={el} />
        });

        // const playerComponents = players.map((player, index) => (
        //     <Player
        //       index={index}
        //       name={player.name}
        //       score={player.score}
        //       key={player.name}
        //       updatePlayerScore={updatePlayerScore}
        //       removePlayer={removePlayer}
        //       playerDetails={playerDetails}
        //     />
        //   ));

        return(
            <>
                <h1>Shopping List</h1>
                <p>Start by creating your items' categories (ex: food, household, stuff to buy from Amazon, etc.). 
                    Then, fill out the lists by entering them in the forms below.</p>

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Category" value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="Add Category" />
                    </form>
                <div className="category-list">
                    {theCategories}
                </div>
            </>
        )
    }
}

// const mapStateToProps = state => ({
//     message: state.auth.message,
//     categories: state.auth.categories
// })

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
)(Home);
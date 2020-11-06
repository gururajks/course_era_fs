import React from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes}
                    onClick={(dish) => this.onDishSelect(dish)} />
                <DishDetail selectedDish={this.state.selectedDish} />
                <Footer />
            </div>
        );
    }
}

export default Main;

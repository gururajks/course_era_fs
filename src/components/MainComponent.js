import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';

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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">
                            Ristorante Con Fusion
                    </NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dish) => this.onDishSelect(dish)} />
                <DishDetail selectedDish={this.state.selectedDish} />
            </div>
        );
    }
}

export default Main;

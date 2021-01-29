import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from '../Cart/CartColumns';
import EmptyCart from '../Cart/EmptyCart';
import { ProductsContext } from '../../Share/Context';
import CartList from '../Cart/CartList';
import TotalCart from '../Cart/TotalCart';

export default class Cart extends Component {
    static contextType = ProductsContext;

    render() {

        const { cart } = this.context;

        if (cart.length <= 0) {
            return <EmptyCart />
        }
        return (
            <section>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList value={this.context} />
                <TotalCart value={this.context} history={this.props.history} />
            </section>
        )
    }
}

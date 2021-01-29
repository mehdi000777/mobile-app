import React, { Component } from 'react'
import Product from '../Product';
import Title from '../Title';
import { ProductsContext } from '../../Share/Context';

export default class ProductList extends Component {

    static contextType = ProductsContext;

    render() {
        const { products } = this.context;
        return (
            <>
                <section className="py-5">
                    <div className="container">
                        <Title name="our" title="Products" />
                        <div className="row">
                            {
                                products.map(product => {
                                    return <Product key={product.id} product={product} />
                                })
                            }
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

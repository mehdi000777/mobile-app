import React, { Component } from 'react'
import { ProductsContext } from '../../Share/Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../style';

export default class Details extends Component {

    static contextType = ProductsContext;

    render() {

        const { price, title, img, id, company, info, inCart } = this.context.detailProduct;
        const { addToCart, modalOpen } = this.context;

        return (
            <section className="container py-5">
                {/* start title */}
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                    </div>
                    {/* end title */}
                    {/* Product info */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={img} className="img-fluid" alt="Procut" />
                        </div>
                        {/* text Product */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h2>model: {title}</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                made by: <span className="text-uppercase">
                                    {company}
                                </span>
                            </h4>
                            <h4 className="text-blue">
                                <strong>
                                    Price: <span>$</span>
                                    {price}
                                </strong>
                            </h4>
                            <div className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about product:
                                <p className="text-muted lead">{info}</p>
                            </div>
                            {/* buttons */}
                            <Link to="/">
                                <ButtonContainer>
                                    back to products
                                </ButtonContainer>
                            </Link>
                            <ButtonContainer cart disabled={inCart ? true : false} onClick={() => { addToCart(id); modalOpen(id); }}>
                                {inCart ? "In Cart" : "Add To Cart"}
                            </ButtonContainer>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

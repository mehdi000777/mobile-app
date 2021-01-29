import React, { useContext } from 'react'
import { ProductWrapper } from './style';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ProductsContext } from '../Share/Context'

const Product = ({ product }) => {

    const { title, id, img, price, inCart } = product;
    const { addToCart, handelDetails, modalOpen } = useContext(ProductsContext);

    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <div className="img-container p-5" onClick={() => handelDetails(id)}>
                    <Link to="/details">
                        <img src={img} alt="Product" className="card-img-top" />
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true : false} onClick={() => { addToCart(id); modalOpen(id); }}>
                        {inCart ? <p className="text-capitalize mb-0">in Cart</p> : <i><FaCartPlus /></i>}
                    </button>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-slef-center mb-0">{title}</p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {price}
                    </h5>
                </div>
            </div>
        </ProductWrapper>
    )
}


Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        price: PropTypes.number,
        title: PropTypes.string,
        inCart: PropTypes.bool
    }).isRequired
}


export default Product;

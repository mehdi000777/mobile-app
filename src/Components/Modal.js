import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductsContext } from '../Share/Context'
import { ModalContainer, ButtonContainer } from './style';

const Modal = () => {
    const { openModal, modalClose, detailProduct } = useContext(ProductsContext)
    const { title, img, price } = detailProduct;

    if (!openModal) {
        return null
    }
    else {
        return (
            <ModalContainer>
                <div className="container">
                    <div className="row">
                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize">
                            <h5>Item added to cart</h5>
                            <img src={img} className="img-fluid" alt="Product" />
                            <h5>{title}</h5>
                            <h5 className="text-muted">Price: $ {price}</h5>
                            <Link to="/">
                                <ButtonContainer onClick={() => modalClose()}>
                                    continue shopping
                                </ButtonContainer>
                            </Link>
                            <Link to="/cart">
                                <ButtonContainer cart onClick={() => modalClose()}>
                                    go to cart
                            </ButtonContainer>
                            </Link>
                        </div>
                    </div>
                </div>
            </ModalContainer>
        )
    }
}


export default Modal;
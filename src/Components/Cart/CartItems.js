import React from 'react'
import { FaTrash } from 'react-icons/fa'

const CartItems = ({ item, value }) => {

    const { title, id, price, total, count, img } = item;
    const { inCrement, deCrement, removeItem } = value

    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{ width: "5rem", height: "5rem" }} className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center align-items-center">
                    <span className="btn btn-black mx-1" onClick={() => deCrement(id)}>-</span>
                    <span className="btn btn-black mx-1" > {count} </span>
                    <span className="btn btn-black mx-1" onClick={() => inCrement(id)}>+</span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i><FaTrash /></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 mb-2">
                <strong>item total: {total}</strong>
            </div>
        </div>
    )
}


export default CartItems;

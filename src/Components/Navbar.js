import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import { FaCartPlus } from 'react-icons/fa';
import { ButtonContainer, NavWrapper } from './style';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    <Link to="/">
                        <img src={Logo} alt="store" className="navbar-brand" />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                Products
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <i><FaCartPlus /> My Cart</i>
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div>
        )
    }
}

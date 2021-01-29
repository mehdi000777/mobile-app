import styled from 'styled-components';


export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: var(--lightBlue);
color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: .5rem;
padding: .2rem .5rem;
cursor: pointer;
margin: .5rem .2rem .5rem 0;
outline: none;
transition: all .5s ease-in-out;
&:hover{
    background: var(--lightBlue);
    background-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
} 
`

export const NavWrapper = styled.nav`
background-color: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`

export const ProductWrapper = styled.article`
.card{
    border: transparent;
    transition: all 1s linear;
}
.card-footer{
    background: transparent;
    border: transparent;
}
&:hover{
    .card{
        border: .04rem solid rgba(0,0,0,.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
    }
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
    }
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1.4rem;
    padding: .2rem .4rem;
    background: var(--lightBlue);
    border: none;
    outline: none;
    color: var(--mainWhite);
    border-radius: .5rem 0 0 0;
    cursor: pointer;
    transform: translate(100%,100%);
    transition: all 1s linear;
}
.card:hover .cart-btn{
    transform: translate(0,0);
}
`

export const ModalContainer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    #modal{
        background: var(--mainWhite);
    }
`
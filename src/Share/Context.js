import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';
import { storeProducts, detailProduct } from '../data';

const ProductsContext = React.createContext();

class ProductsProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        openModal: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleProduct = { ...item };
            tempProducts = [...tempProducts, singleProduct];
        });
        this.setState(() => {
            return { products: tempProducts }
        });
    };

    getItem = (id) => {
        const Prodcut = this.state.products.find(item => item.id === id);
        return Prodcut;
    };

    handelDetails = (id) => {
        const Product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: Product }
        });
    };

    addToCart = (id) => {
        let tempProdcuts = [...this.state.products];
        const index = tempProdcuts.indexOf(this.getItem(id));
        const product = tempProdcuts[index];
        product.inCart = true;
        product.count = 1;
        const Price = product.price;
        product.total = Price;
        this.setState(() => {
            return { products: tempProdcuts, cart: [...this.state.cart, product] }
        }, this.addTotal);
    };

    modalOpen = (id) => {
        const product = this.getItem(id);
        this.setState({ openModal: true, modalProduct: product });
    }

    modalClose = () => {
        this.setState({ openModal: false });
    }

    inCrement = (id) => {
        let tempProdcuts = [...this.state.cart]
        const selectedProduct = tempProdcuts.find(item => item.id === id);
        const index = tempProdcuts.indexOf(selectedProduct);
        const product = tempProdcuts[index];
        product.count += 1
        const Price = product.price;
        product.total += Price;
        this.setState(() => {
            return { cart: [...tempProdcuts] }
        }, this.addTotal);
    }

    deCrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id);
        }
        else {
            product.total -= product.price;
            this.setState({ cart: [...tempCart] }, this.addTotal);
        }
    }

    removeItem = (id) => {
        let tempProdcuts = [...this.state.products];
        let tempCart = [...this.state.cart];
        const index = tempProdcuts.indexOf(this.getItem(id))
        const product = tempProdcuts[index];
        product.inCart = false;
        product.count = 0;
        product.total = 0;
        tempCart = tempCart.filter(item => item.id !== id);
        this.setState({ products: [...tempProdcuts], cart: [...tempCart] }, this.addTotal);
    }

    clearCart = () => {
        this.setState({ cart: [] }, () => {
            return (
                this.setProducts(),
                this.addTotal()
            )
        });
    }

    addTotal = () => {
        let subtotal = 0;
        this.state.cart.map(item => subtotal += item.total);
        const temptax = subtotal * 0.1;
        const tax = parseFloat(temptax.toFixed(2));
        const total = subtotal + tax;
        this.setState({
            cartSubtotal: subtotal,
            cartTax: tax,
            cartTotal: total
        });
    };

    render() {
        return (
            <ProductsContext.Provider value={
                {
                    ...this.state,
                    addToCart: this.addToCart,
                    handelDetails: this.handelDetails,
                    modalOpen: this.modalOpen,
                    modalClose: this.modalClose,
                    inCrement: this.inCrement,
                    deCrement: this.deCrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }} >
                { this.props.children}
            </ ProductsContext.Provider>
        )
    }

}

const ProductConsumer = ProductsContext.Consumer;

export { ProductsContext, ProductsProvider, ProductConsumer };